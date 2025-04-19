import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";
const app = express()


// require('dotenv').config({path : './env'})

import dotenv from "dotenv"

dotenv.config({
    path : './env'
})



import connectDB from "./db";

connectDB();














/*
1ST APPROCH 
// ;(async() => {
//     try {
//         await mongoose.connect(`${process.env.MONBGODB_URI}/${DB_NAME}`)
//         app.on("error" , (error)=>{
//             console.log("err" , error);
//             throw error 
//         })
//     app.listen(process.env.port , () => {
//         console.log(`APP is listenig on port ${process.env.PORT}`)
//     })
//     } catch (error) {
//         console.error("ERROR:" , error)
//         throw err
        
//     }
// })()

// always try catch becude error aa skati hai

// databse is always in another continent 
// so use asyunc await 

// 1st approch 
// function connectDB(){

// }
// connectDB()

// iffi -> start with a semicolon 
*/
