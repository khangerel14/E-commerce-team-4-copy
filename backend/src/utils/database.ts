import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const connectDatabase = async () => {
  try {
    const MONGODB_URL: any = process.env.MONGODB_URI;
    await mongoose.connect(MONGODB_URL);
    console.log("connect");
  } catch (error: unknown) {
    // throw new Error("Database cannot connect");
    console.log(error);
  }
};
export { connectDatabase };
