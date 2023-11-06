const mongoose = require("mongoose");
require("dotenv").config();

exports.connectDB = () => {
  mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("DataBase connected successfully");
    })
    .catch((error) => {
      console.log("DB CONNECTION ISSUES");
      console.error(error.message);
      process.exit(1);
    });
};
