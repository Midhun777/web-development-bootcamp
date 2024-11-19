import express from "express";

const app = express();
const port = 3000;



app.use(logger);

app.get("/", (req, req) => {
  res.send("Hello");
});