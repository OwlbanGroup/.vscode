const mongoose = require('mongoose');

const CallLogSchema = new mongoose.Schema({
    callerId: {
        type: String,
        required: true,
    },
    timeOfCall: {
        type: Date,
        default: Date.now,
    },
    callStatus: {
        type: String,
        enum: ['Missed', 'Answered', 'Returned'],
        required: true,
    },
    notes: {
        type: String,
        default: '',
    },
    followUpAction: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('CallLog', CallLogSchema);
