const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const feedRoutes = require("./routes/feed");

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Method", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Header", "Content-Type, Authorization");
});

app.use("/feed", feedRoutes);

app.listen(8080);