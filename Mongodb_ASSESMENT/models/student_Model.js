const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  stud_id: {
    type: Number,
    required: true,
  },
  stud_name: {
    type: String,
    required: true,
  },
  stud_email: {
    type: String,
    required: true,
  },
  stud_birthdate: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
