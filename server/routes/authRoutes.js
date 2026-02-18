const express = require("express");
const router = express.Router();

app.get("/api/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get("/api/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    res.redirect("https://careerpath-india-1.onrender.com");
  }
);


const {
  signup,
  login,
  verifyOTP,
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

// ====================
// Test Route
// ====================
router.get("/test", (req, res) => {
  res.json({ message: "Auth route working ✅" });
});

// ====================
// Profile (Protected)
// ====================
router.get("/profile", authMiddleware, async (req, res) => {
  const User = require("../models/User");

  const user = await User.findById(req.user.id).select("-password");

  res.json(user);
});

// ====================
// Auth Routes
// ====================
router.post("/signup", signup);
router.post("/login", login);
router.post("/verify-otp", verifyOTP);

module.exports = router;
