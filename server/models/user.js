import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  isUser:{
    type:Boolean,
    default:true
    },isAdmin:{
      type:Boolean,
      default:false,
      }
});

export default mongoose.model("User", userSchema);