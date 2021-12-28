const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let result = weight / (height * height);

  res.send(`Your BMI is ${result}`);
});

app.listen(3000, () => {
  console.log("Server is runnimg on port 3000.");
});