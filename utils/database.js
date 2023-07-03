import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.connect("strictQuery", true);

  if (isConnected) {
    return console.log("Mongoose is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "sharePrompt",
      useNewUrlParser: true,
      useUndefinedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log(error);
  }
};
