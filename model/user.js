import mongoose from "mongoose";

var nameSchema = new mongoose.Schema({
  firstname: String,
  lastname: String
});

export default mongoose.model("users", nameSchema);
