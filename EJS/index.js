import express from "express";
import exp from "constants";
import ejs from "ejs"

const app = express();
const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
}) 

const dayName = new Date();
const day = dayName.getDay()
