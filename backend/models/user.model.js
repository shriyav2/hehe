// import { mongoose } from "mongoose";
// // import { type } from "os";

// import bcrypt from "bcrypt";
// const userschema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// userschema.pre("save", async (next) => {
//   const user = this;
//       if(!user.isModified("password")) next() ;

//   try {
//     if (user.isModified("password")) {
//             const salrounds=10;

//   const plainpass=this.password;
//     const hashedpassword= await bcrypt.hash(plainpass,salrounds);
//     this.password=hashedpassword

//     }
// }
//     catch(err){
//       console.log(err.message +"in hashing ");
//     }
//     next();
// });

// export const User = mongoose.model("useri", userschema);

userschema.pre('save', async function (next) {
  // 'this' refers to the user document
  if (!this.isModified('password')) {
    return next(); // if password is not modified, go to next middleware/save as usual
  }

  try {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(this.password, saltRounds);
    this.password = hashedPassword;
    next();
  } catch (err) {
    next(err); // pass error to next middleware
  }
});

export const User = mongoose.model('useri', userschema);