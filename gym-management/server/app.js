const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/gym-management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);

module.exports = app;