import mongoose, { Schema } from "mongoose";
import IInfo from "./Info.interface";

const InfoSchema = new Schema<IInfo>({
  avatar: {
    type: String,
    required: false,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IInfo>("Info", InfoSchema);
