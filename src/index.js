// require("dotenv").config({ path: "./env" });
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import dotenv from "dotenv";
import express from "express";
import "dotenv/config";
import connectDB from "./db/index.js";

const app = express();
// dotenv.config({
//     path: "./env",
// });
const Port = process.env.PORT || 8000;
connectDB()
    .then(() => {
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error;
        });
        app.listen(Port, () => {
            console.log(`Server is running at port ${Port}`);
        });
        app.get("/", (req, res) => {
            res.send("Mai taiyar hoon");
        });
    })
    .catch((error) => {
        console.log(`MongoDB connection error: ${error}`);
    });

/*
import express from "express";

const app = express()(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error", () => {
            console.log("ERROR: ", error);
            throw error;
        });
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`);
        });
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
})();
*/
