import express from 'express';
import db from './database/mongoose';
import { getAllUsers } from './controllers/index'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/get/users/list', getAllUsers)


app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);

   // Log a message when MongoDB connection is established
   db.once('open', () => {
    console.log('MongoDB connection established successfully');
  });
});
