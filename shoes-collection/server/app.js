const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require('./routes/auth');
const cartRoutes = require('./routes/cart');
const path = require('path');

const app = express();
app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/shoes-collection', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/cart', cartRoutes);
app.use('/api/auth', authRoutes);

module.exports = app;
