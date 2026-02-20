import app from "./app";
import { connectDB } from "./config/db";
import env from "./config/env";

const startServer = async () => {
  await connectDB();
  app.listen(env.Port, () => {
    console.log(`server listening at port ${env.Port}`);
  });
};
startServer();
