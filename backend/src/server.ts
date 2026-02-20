import express from "express";
const app = express();
import env from "./config/env";
import { connectDB } from "./config/db";

connectDB();
app.get("/", (req, res) => {
  res.send("Hello typescript");
});
app.listen(env.Port, () => {
  console.log(`listening at port ${env.Port}`);
});
