const express = require("express");
const router = express.Router();

const { login, signup } = require("../controllers/Auth");
const { auth, isStudent, isAdmin } = require("../middlewares/auth");
const User = require("../models/User");

router.post("/login", login);
router.post("/signup", signup);

//Testing Protected Route for single middleware

router.get("/test", auth, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Test",
  });
});

//Protected Route

router.get("/student", auth, isStudent, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Student",
  });
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.json({
    success: true,
    message: "Welcome to the Protected Route for Admin",
  });
});

router.get("/getId", auth, async (req, res) => {
  try {
    const id = req.user.id;
    const user = await User.findById(id);

    res.status(200).json({
      success: true,
      user: user,
      message: "Welcome to the ID route",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Fatt gya code",
    });
  }
});

module.exports = router;
