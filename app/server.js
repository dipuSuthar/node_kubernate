const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    message: "Hello from Node.js running on Amazon EKS!",
    hostname: require("os").hostname(),
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
