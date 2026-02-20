import dotenv from "dotenv";

dotenv.config();
const env = {
  Port: process.env.PORT || 3000,
  DB_URL: process.env.MONGO_URL,
};

export default env;
