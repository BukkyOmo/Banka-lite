import mongoose from "mongoose";
const { Schema, model } = mongoose;

var transactionSchema = new Schema({
    type: {
        type: String,
        enum: ["Debit", "Credit"],
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    modifiedAt: Date,
    account: {
        type: Schema.Types.ObjectId,
        ref: "Accounts"
    }
});

export default model("Transactions", transactionSchema);
