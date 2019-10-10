import mongoose from "mongoose";
const { Schema, model } = mongoose;

var accountSchema = new Schema({
    type: {
        type: String,
        enum: ["Savings", "Current"],
        required: true
    },
    activated: {
        type: Boolean,
        required: true
    },
    createdAt: Date,
    modifiedAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
});

export default model("Accounts", accountSchema);
