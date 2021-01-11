const express = require("express");
const app = express();

const PORT = 3001;

app.get("/", (req, res) => {
  res.send("Hi there");
});

app.listen(PORT, () => {
  console.log(`Server running on Port ${PORT}....`);
});
