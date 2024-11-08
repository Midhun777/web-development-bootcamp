import express from "express";
import ejs from "ejs"
import exp from "constants";


app.listen(PORT,()=>{
    console.log(`Listening on ${PORT}`)
}) 

const dayName = new Date();
const day = dayName.getDay()
