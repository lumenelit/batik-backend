import express, { Express, Request, Response, Router } from 'express';
import dotenv from 'dotenv';
// import mongoose from 'mongoose'; // Hapus import ini jika tidak akan menggunakan koneksi database

dotenv.config();

// const ConnectDB = async () => {
//   const MongoURI = `${process.env.DATABASE}`;
//   try {
//     await mongoose.connect(MongoURI);
//     console.log('MongoDB Connected');
//   } catch (err) {
//     console.error('MongoDB Connection Error:', err);
//     throw err;
//   }
// };

const cors = require('cors');
const app: Express = express();
const port = process.env.PORT || 3000; // Default port 3000 if PORT is not set

app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use(express.json({ limit: '30mb' }));
app.use(require('express-fileupload')());
app.use(cors());

const RouterApi = Router();

app.use('/api', RouterApi);

// Panggil ConnectDB dan tunggu koneksi sebelum menjalankan server
// ConnectDB().then(() => { // Hapus pemanggilan ConnectDB()
// Set up routing
RouterApi.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

// RouterApi.use('/industri', require('./src/routes/industri'));
// RouterApi.use('/motif', require('./src/routes/motif'));
// RouterApi.use('/pesanan', require('./src/routes/pesanan'));

// Jalankan server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// }).catch(err => {
//   console.error('Error starting the server:', err);
// });
