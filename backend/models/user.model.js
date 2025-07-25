import { mongoose } from "mongoose";
// import { type } from "os";

import bcrypt from "bcrypt";
const userschema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userschema.pre("save", async (next) => {
  const user = this;
      if(!user.isModified("password")) next() ;

  try {
    if (user.isModified("password")) {
            const salrounds=10;

  const plainpass=this.password;
    const hashedpassword= await bcrypt.hash(plainpass,salrounds);
    this.password=hashedpassword

    }
}
    catch(err){
      console.log(err.message +"in hashing ");
    }
    next();
});

export const User = mongoose.model("useri", userschema);
