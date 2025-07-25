import express from "express";
import { User } from "../models/user.model.js";
const router = express.Router();
console.log("hi")
// async function fxn(req,res) {
    console.log("hi")

//     const { name, email, password } = req.body;
// try{
//       const useri = await User.findOne({ email });
//   if (!useri) {
//     const Useri = await User.create({ name, email, password });
//     return res.json({ message: "User created successfully" });
//   } else {
//     return res.json({ message: "User already exist"});
//   }
// }
// catch(err){
//     console.log(err);
// }
// }
// userrouter.post("/signin",fxn)

router.post("/signup", async (req, res) => {
  const { name,  email, password } = req.body;

  await User.create({
    name,
    
    email,
    password,
  });

  return res.redirect("/");
});
export { router };
