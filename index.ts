import express, { Express, Request, Response, Router } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const ConnectDB = async () => {
  const MongoURI = `${process.env.DATABASE}`;
  try {
    await mongoose.connect(MongoURI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("MongoDB Connection Error:", err);
    throw err;
  }
};

const cors = require("cors");
const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(express.json({ limit: "30mb" }));
app.use(require("express-fileupload")());
app.use(cors());

const RouterApi = Router();

app.use("/api", RouterApi);

(async () => {
  try {
    await ConnectDB();
    RouterApi.get("/", (req: Request, res: Response) => {
      res.send("Express + TypeScript Server");
    });

    RouterApi.use("/industri", require("./src/routes/industri"));
    RouterApi.use("/motif", require("./src/routes/motif"));
    RouterApi.use("/pesanan", require("./src/routes/pesanan"));

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error);
  }
})();
