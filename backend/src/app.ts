import express from "express";
import routes from "../src/routes";

import { errorHandler, notFoundHandler } from "./middleware/error.middleware";

const app = express();

//  1. Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", routes);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;
