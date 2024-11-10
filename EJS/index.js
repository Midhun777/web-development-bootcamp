import express from "express";
import ejs from "ejs"
import exp from "constants";

const app = express();
const PORT = 3000;


const dayName = new Date();
const day = dayName.getDay()
