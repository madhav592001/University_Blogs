import express from 'express';
import dotenv from 'dotenv';
import { connectdb } from './db/conn.js';

const app = express();
dotenv.config();

connectdb();


const port = process.env.PORT;
app.listen(() => {
  console.log(`Server Listening on Port ${port}`);
});
