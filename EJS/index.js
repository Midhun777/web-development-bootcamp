import express from "express";
import ejs from "ejs"
import exp from "constants";

const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
}) 

