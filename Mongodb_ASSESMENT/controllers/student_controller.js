const Student = require("../models/student_Model");

exports.data = async (req, res) => {
  try {
    const { stud_id, stud_name, stud_email, stud_birthdate } = req.body;
    console.log(req.body);
    const student = new Student({
      stud_id,
      stud_name,
      stud_email,
      stud_birthdate,
    });

    const data = await student.save();

    res.status(200).json({
      success: true,
      data: data,
      message: "Student data store successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error while store data",
      error: error.message,
    });
  }
};
