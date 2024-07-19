// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/connectDB.js";

dotenv.config({ path: "./env" });

//connect to MongoDB
connectDB().then().catch();

/*
import express from "express";
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
    throw error;
  }
})();
*/
