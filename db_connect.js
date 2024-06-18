import mongoose from "mongoose";

const dbUserName = "shreya";
const dbPassword = "shreya12345";
const dbName = "mern-netflix";
const dbHost = "shreya.cb9desn.mongodb.net";

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${dbUserName}:${dbPassword}@${dbHost}/${dbName}?retryWrites=true&w=majority&appName=shreya`
    );
    console.log("DB connection established...");
  } catch (error) {
    console.log("DB connection failed...");
    console.log(error.message);
  }
};

export default connectDB;
