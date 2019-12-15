import mongoose from "mongoose";
const { Schema, model } = mongoose;

var userSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    role: {
        type: String,
        enum: ['customer, cashier, staff, super-admin'],
        default: 'customer'
    },
    phoneNumber: Number,
    address: String,
    imageURL: String,
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: Date
});

export default model("Users", userSchema);
