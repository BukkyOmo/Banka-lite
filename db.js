import mongoose from "mongoose";

const dbRoute = 'mongodb://localhost:27017/Banka-lite';

mongoose.connect(dbRoute, { useNewUrlParser: true });

export default mongoose.connection;
