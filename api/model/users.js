import mongoose from "mongoose";
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    phoneNumber: Number,
    role: String
});

const User = mongoose.model("users", UserSchema);

export default User;
