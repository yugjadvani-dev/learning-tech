const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin-auth')
const blog = require('./routes/blog')

const app = express();
app.use(cors({ origin: "*", credentials: true }));

app.use(express.json());

mongoose.connect('mongodb://localhost:27017/varni-consultancy', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/auth', adminRoutes)
app.use('/api/blog', blog)

module.exports = app;
