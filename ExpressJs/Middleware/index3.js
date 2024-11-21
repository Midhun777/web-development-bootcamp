import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("Request Method : ", req.method);
  console.log("Request URL : ", req.url);
  next();
}
function logger(req, res, next) {
  console.log("Request Method : ", req.method);
  console.log("Request URL : ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, req) => {
  res.send("Hello");
});