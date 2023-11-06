const express = require("express");
const app = express();

require("dotenv").config();
PORT = process.env.PORT || 3000;

//middleware
app.use(express.json());

//mount
const blog = require("./routes/blog");
app.use("/api/v1", blog);

//connect with mongodb
const connectWithDb = require("./config/database");
connectWithDb();

//start the server
app.listen(PORT, () => {
  console.log(`APP is started at port no ${PORT}`);
});

app.get("/", (req, res) => {
  res.send(`<h1>This is my homepage</h1>`);
});
