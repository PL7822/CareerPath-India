require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const User = require("./models/User");

const app = express();

// =======================
// Middlewares
// =======================

app.use(cors({
  origin: "http://localhost:8080",
  credentials: true
}));

app.use(express.json());

// =======================
// MongoDB Connection
// =======================

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log("Mongo Error:", err));

// =======================
// Test Route
// =======================

app.get("/", (req, res) => {
  res.send("Server Running");
});

// =======================
// SIGNUP
// =======================

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

    // Send Welcome Email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    try {
      await transporter.sendMail({
        from: `"CareerPath India 🚀" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Welcome to CareerPath India 🎉",
        html: `
    <div style="margin:0;padding:0;background:#f4f6f9;font-family:Arial,sans-serif;">
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:40px 0;">
            <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 5px 15px rgba(0,0,0,0.1);">
              
              <tr>
                <td style="background:#2563eb;color:white;padding:20px;text-align:center;">
                  <h1 style="margin:0;">CareerPath India 🚀</h1>
                </td>
              </tr>

              <tr>
                <td style="padding:30px;">
                  <h2 style="color:#333;">Welcome ${name} 🎉</h2>
                  <p style="color:#555;font-size:15px;line-height:1.6;">
                    Thank you for signing up with CareerPath India.
                    We're excited to guide your career journey.
                  </p>

                  <div style="text-align:center;margin:30px 0;">
                    <a href="http://localhost:8080"
                      style="background:#2563eb;color:#ffffff;
                      padding:12px 24px;
                      text-decoration:none;
                      border-radius:8px;
                      font-weight:bold;">
                      Explore Career Options
                    </a>
                  </div>

                  <p style="font-size:12px;color:#999;text-align:center;">
                    © ${new Date().getFullYear()} CareerPath India | Built with ❤️ by Pritam All rights reserved.
                  </p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </div>
    `
      });
    } catch (mailError) {
      console.log("Email Error:", mailError.message);
    }


    res.json({
      message: "Signup successful ✅",
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        createdAt: newUser.createdAt
      }
    });

  } catch (err) {
    console.log("Signup Error:", err);
    res.status(500).json({ message: "Signup error" });
  }
});

// =======================
// LOGIN
// =======================

app.post("/api/auth/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // ✅ Correct password compare
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
    console.log("Login Error:", err);
    res.status(500).json({ message: "Login error" });
  }
});

// =======================
// PROFILE (Protected)
// =======================

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

// =======================
// Server Start
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
