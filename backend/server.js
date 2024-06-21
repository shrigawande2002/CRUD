import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import router from "./Routes/router.js";
import cors from 'cors'
dotenv.config();

const app = express();

mongoose.connect(process.env.URL)
  .then(() => console.log("Connected to mongo"))
  .catch(() => console.log("Failed to connect"));

app.use(express.json());
app.use(cors())

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.use(router);
app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${process.env.PORT}`);
});
