const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'student' }, // student or admin
    subscription: {
        type: { type: String, default: 'none' }, // monthly, yearly, none
        startDate: { type: Date },
        endDate: { type: Date },
        isActive: { type: Boolean, default: false }
    },
    dailyProgress: { type: Number, default: 0 },
    courseName: { type: String, default: "None" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
