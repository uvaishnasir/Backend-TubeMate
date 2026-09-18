// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./DB/connectDB.js";
import { app } from "./app.js";
dotenv.config({ path: "./.env" });

//connect to MongoDB
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
