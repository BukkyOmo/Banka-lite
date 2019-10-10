import mongoose from "mongoose";
const { Schema, model } = mongoose;

var userSchema = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: Number,
    imageURL: String,
    isAdmin: Boolean,
    createdAt: Date,
    modifiedAt: Date
});

export default model("Users", userSchema);
