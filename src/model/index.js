import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./user";
import Account from "./account";
import Transaction from "./transaction";

dotenv.config();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const models = { User, Account, Transaction };
export default models;
