import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.static("dist"));
app.use(express.static("uploads"));
app.use(express.json());
app.use("/", router);

app.listen(port, () => {
  console.log("Server on port ", port);
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Connect to Mongo DB");
  })
  .catch((error) => {
    console.log(error);
  });
