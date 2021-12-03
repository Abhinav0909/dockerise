const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.port || 5000;
app.get("/", (req, res) => {
  res.send("Begin a project");
});
app.listen(port, () => console.log(`Server is running on port number ${port}`));
