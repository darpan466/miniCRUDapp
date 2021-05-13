import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Please enter your name"
  },
  dob: {
    type: Date,
    required: "Please enter your date of birth"
  },
  address: {
    type: String,
    required: "Please enter your address",
  },
  description: {
    type: String,
    default: "No description provided",
  },
}, {timestamps: true});

export default mongoose.model("User", userSchema);