// import models
const Todo = require("../models/Todo");

//define route handler
exports.createTodo = async (req, res) => {
  try {
    // extract title and description from request body
    const { title, description } = req.body;

    //create a new todo object and insert in DB
    const response = await Todo.create({ title, description });

    //send a json response with a success flag
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created successfully",
    });
    // res.send("data send successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: error.message,
    });
  }
};
