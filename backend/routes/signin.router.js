// import {Router} from "express";
// import { User } from "../models/user.model.js";
// const router = Router();
// console.log("hi")
// // async function fxn(req,res) {
//     console.log("hi")

// //     const { name, email, password } = req.body;
// // try{
// //       const useri = await User.findOne({ email });
// //   if (!useri) {
// //     const Useri = await User.create({ name, email, password });
// //     return res.json({ message: "User created successfully" });
// //   } else {
// //     return res.json({ message: "User already exist"});
// //   }
// // }
// // catch(err){
// //     console.log(err);
// // }
// // }
// // userrouter.post("/signin",fxn)
// console.log(User)
// router.post("/signup", async (req, res) => {
//   const { name,  email, password } = req.body;
// console.log(req)
//   await User.create({
//     name,
    
//     email,
//     password,
//   });

//   return res.json({ message: "User created successfully" })
// });
// export { router };
import express from 'express';
const router = express.Router();

router.post('/signup', (req, res) => {
    const { username, password, email } = req.body;
    // Your signup logic here (validation, save to DB, etc.)
    res.status(201).json({ message: 'Signup successful' });
});

export { router}
