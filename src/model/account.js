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
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: Date,
    user: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
});

export default model("Accounts", accountSchema);
