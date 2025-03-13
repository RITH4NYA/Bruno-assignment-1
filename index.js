const express = require('express');
const { resolve } = require('path');
const userRouter = require('./Router');
const connectDB = require('./db');
require('dotenv').config(); 

const app = express();
const port = 3010;

app.use(express.json());
app.use(express.static('static'));

connectDB(process.env.MONGO_DB).then(() => {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}).catch(err => {
  console.error('Failed to connect to database:', err);
});


app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});
app.use('/get-user', userRouter);