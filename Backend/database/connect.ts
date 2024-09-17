import "dotenv/config";
import mongoose from "mongoose";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("Please add your MONGO_URI to .env.local");
}

mongoose
  .connect(uri)
  .then(() => {
    console.log("Successfully connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
    process.exit(1);
  });

export default mongoose;
