const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());

app.use(express.static(__dirname + "/react-page/dist"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});
app.use("/aaa", (req, res) => {
  res.json({ ok: true });
});

app.use((_, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((error, req, res, next) => {
  const { status = 500, message = "Server error" } = error;
  res.status(status).json({ message });
});

app.listen(3010, () => {
  console.log("Server is running. Use our API on port: 3010");
});
