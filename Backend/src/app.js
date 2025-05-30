const express = require("express");
const aiRouter = require("./routes/ai.routes");
const cors = require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/ai", aiRouter);

module.exports = app;
