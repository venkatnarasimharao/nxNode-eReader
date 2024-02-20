import express from 'express';
import { createServer, proxy } from 'aws-serverless-express'
import db from './database/mongoose';
import { getAllUsers } from './controllers/index'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? +process.env.PORT : 3000

const app = express();
// Create a server instance
const server = createServer(app);

// Export a handler function for AWS Lambda
export const handler = (event, context) => {
  proxy(server, event, context);
};

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

