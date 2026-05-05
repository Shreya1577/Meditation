const mongoose = require('mongoose');

const liveSessionSchema = new mongoose.Schema({
    currentLink: { type: String, default: '' },
    morningTime: { type: String, default: '08:00 PM' },
    eveningTime: { type: String, default: '10:00 PM' },
    lastUpdated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LiveSession', liveSessionSchema);
