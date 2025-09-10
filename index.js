const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

// Tell express to serve static files from "public"
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Skills page
app.get("/skills", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "skills.html"));
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
