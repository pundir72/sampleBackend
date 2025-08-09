const express = require("express");
const app = express();
const port = process.env.PORT || 5012;

app.get("/", (req, res) => {
  res.send(`Server is running on port ${port}`);
});

app.listen(port, () => {
  console.log(`Service listening on port ${port}`);
});
