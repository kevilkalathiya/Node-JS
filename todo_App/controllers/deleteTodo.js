// import models
const Todo = require("../models/Todo");

//define route handler
exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const todo = await Todo.findByIdAndDelete(id);

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
      message: "Todo Deleted",
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
