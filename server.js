const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const itemRoutes = require('./routes/items');
app.use('/api/items', itemRoutes);

const PORT = process.env.PORT || 5001;

const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 5000 // ⬅️ avoids long hanging
})
.then(() => {
    console.log('MongoDB connected');

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
})
.catch(err => {
    console.log('MongoDB connection error:', err.message);
});