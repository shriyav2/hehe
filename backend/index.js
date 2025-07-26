import express from "express"
import mongoose from "mongoose"
import cors from "cors"
// import {user} from "../models/user.model.js"
import {router} from "./routes/signin.router.js"
const PORT=3000;

const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const corsopts={
    origin:[
    "http://127.0.0.1:5500",
    "http://127.0.0.1:5173",

]}
app.use(cors(corsopts))
// app.use(router,"user")
app.use("/user", router)

mongoose.connect("mongodb://127.0.0.1:27017/hack1")
.then(()=>{console.log("mongoose extablished")})
.catch((error) => {
  console.error("There is some error in connection: " + error.message);
});


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
