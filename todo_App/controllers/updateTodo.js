// import models
const Todo = require("../models/Todo");

//define route handler
exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      { _id: id },
      { title, description, updatedAt: Date.now() }
    );

    //data for given id not found
    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "No Data Found With Given Id",
      });
    }

    res.status(200).json({
      success: true,
      data: todo,
      message: "Updated Successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      error: error.message,
      message: "Server Error",
    });
  }
};
