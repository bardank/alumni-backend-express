

import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import routes from "./routes/index.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  return res
    .status(err.code < 600 ? err.code : 500)
    .json({ ...err, message: err.message });
});

export default app;
