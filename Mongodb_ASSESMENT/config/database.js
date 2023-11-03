const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("DB Connected Successfully");
    })
    .catch((error) => {
      console.log("DB Facing Connection Issues");
      console.error(error);
      process.exit(1);
    });
};
