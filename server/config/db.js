import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.DATABASE_URI}/${process.env.DB_NAME}`);
    console.log("Mongodb connected successfully");
  } catch (error) {
    console.log(`Mongodb connected unsuccessfully ${error}`);
  }
};

export default connectDB;