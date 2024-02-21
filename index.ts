import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const ConnectDB = async () => {
  const MongoURI = `${process.env.DATABASE}`;
  return new Promise((resolve, reject) => {
    mongoose.set('strictQuery', false);
    mongoose
      .connect(MongoURI)
      .then(() => {
        console.log('MongoDB Connected');
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        reject(false);
      });
  });
};

const cors = require('cors');
const app: Express = express();
const port = process.env.PORT;
const RouterApi = Router();

app.use(express.urlencoded({ limit: '30000kb', extended: true }));

app.use(express.json({ limit: '30000kb' }));

app.use(require('express-fileupload')());

app.use(cors());

app.use('/api', RouterApi);

export const startServer = async () => {
  try {
    // await ConnectDB();
    RouterApi.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server');
    });

    RouterApi.use('/industri', require('./src/routes/industri'));

    RouterApi.use('/motif', require('./src/routes/motif'));

    RouterApi.use('/pesanan', require('./src/routes/pesanan'));

    app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
};

startServer();
