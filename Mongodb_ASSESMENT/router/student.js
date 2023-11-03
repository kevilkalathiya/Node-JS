const express = require("express");
const router = express.Router();

const { data } = require("../controllers/student_controller");

router.post("/student", data);

module.exports = router;
