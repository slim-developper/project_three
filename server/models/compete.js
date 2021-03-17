import mongoose from "mongoose";

const competeSchema = mongoose.Schema({
  name: { type: String, required:  true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  isCompete:{
    type:Boolean,
    default:true
    }
});

export default mongoose.model("Compete", competeSchema);