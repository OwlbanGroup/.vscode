const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const CallLog = require('./models/CallLog');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/callLogs', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// API Endpoints
app.get('/api/calls', async (req, res) => {
    try {
        const calls = await CallLog.find();
        res.json(calls);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.post('/api/calls', async (req, res) => {
    const { callerId, callStatus, notes, followUpAction } = req.body;

    const newCallLog = new CallLog({
        callerId,
        callStatus,
        notes,
        followUpAction,
    });

    try {
        const savedCallLog = await newCallLog.save();
        res.status(201).json(savedCallLog);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
