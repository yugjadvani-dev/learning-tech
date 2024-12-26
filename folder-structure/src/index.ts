import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
