import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbRoute = process.env.DATABASE_URL;
mongoose.connect(dbRoute, { useNewUrlParser: true });

export default mongoose.connection;
