import mongoose from "mongoose";

export default async function connectDB() {
  const url = process.env.MONGODB_URI;

  try {
    await mongoose.connect(url);
    console.log('Database connected');
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  return;
}
