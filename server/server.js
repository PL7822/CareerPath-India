require("dotenv").config();

const { Resend } = require("resend");
const resend = new Resend(process.env.RESEND_API_KEY);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const User = require("./models/User");

const app = express();

/* =========================
   CORS CONFIG
========================= */

const allowedOrigins = [
  "http://localhost:5173",
  "https://career-path-india.vercel.app",
  "https://careerpath-india.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

/* =========================
   MongoDB
========================= */

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected ✅"))
  .catch(err => console.log("Mongo Error:", err.message));

/* =========================
   TEST ROUTE
========================= */

app.get("/", (req, res) => {
  res.send("Server Running 🚀");
});

/* =========================
   SIGNUP
========================= */

app.post("/api/auth/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    // ✅ Send response immediately (fast signup)
    res.json({
      message: "Signup successful ✅",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });

    // ✅ Send email in background (no await)
    resend.emails.send({
      from: "CareerPath India <onboarding@resend.dev>",
      to: email,
      subject: "Welcome to CareerPath India 🎉",
      html: `
        <div style="font-family:Arial;padding:30px;background:#f4f6f9">
          <div style="max-width:500px;margin:auto;background:white;padding:20px;border-radius:10px">
            <h2 style="color:#2563eb">Welcome ${name} 🚀</h2>
            <p style="font-size:15px;color:#444">
              Thank you for joining <strong>CareerPath India</strong>.
            </p>
            <div style="text-align:center;margin:20px 0">
              <a href="https://career-path-india.vercel.app"
                 style="background:#2563eb;color:white;padding:10px 20px;
                        text-decoration:none;border-radius:6px">
                Visit Website
              </a>
            </div>
            <p style="font-size:13px;color:#888">
              If you did not sign up, please ignore this email.
            </p>
          </div>
        </div>
      `
    })
      .then(() => console.log("Email sent via Resend ✅"))
      .catch(err => console.log("Resend Error:", err.message));

  } catch (err) {
    console.log("Signup Error:", err.message);
    res.status(500).json({ message: "Signup error" });
  }
});


/* =========================
   LOGIN
========================= */

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful ✅",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        createdAt: user.createdAt
      }
    });

  } catch (err) {
    console.log("Login Error:", err.message);
    res.status(500).json({ message: "Login error" });
  }
});

/* =========================
   PROFILE
========================= */

app.get("/api/auth/profile", async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);

  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
});

/* =========================
   SERVER START
========================= */

const PORT = process.env.PORT || 10000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT + " 🚀");
});
