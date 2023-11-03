const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.use(express.json());

// const hbs = require("hbs");
// hbs.registerPartials(__dirname + "/../views");
// app.set("view engine", "hbs");

// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

require("./config/database").connectDb();

const router = require("./router/student");
app.use("/api/v1", router);

app.listen(PORT, () => {
  console.log(`App is listen on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.render("student");
});
