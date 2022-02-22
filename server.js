const express = require('express');
const dotenv = require('dotenv');
const connectdb = require('./db/conn');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors('*'));

connectdb();

app.use('/auth', authRoutes);

//TODO LISTNER
const port = process.env.PORT;
app.listen(port,() => {
  console.log(`Server Listening on Port ${port}`);
});
