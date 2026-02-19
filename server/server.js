require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

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
   MongoDB Connection
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

    // 🔥 Send response immediately (fast signup)
    res.json({
      message: "Signup successful ✅",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email
      }
    });

    // 🔥 Send email in background
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      family: 4,   // 👈 IMPORTANT (force IPv4)
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });


    transporter.sendMail({
      from: `"CareerPath India 🚀" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Welcome to CareerPath India 🎉",
      html: `
        <div style="font-family:Arial">
          <h2>Welcome ${name} 🎉</h2>
          <p>Thank you for signing up.</p>
          <a href="https://career-path-india.vercel.app">
            Visit Website
          </a>
        </div>
      `
    }).catch(err => console.log("Email Error:", err.message));

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
   PROFILE (Protected)
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
