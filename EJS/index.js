import express from "express";
import ejs from "ejs"
import exp from "constants";

const app = express();

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
}) 

const dayName = new Date();
const day = dayName.getDay()
