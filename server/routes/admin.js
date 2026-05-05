const express = require('express');
const User = require('../models/User');
const LiveSession = require('../models/LiveSession');
const router = express.Router();

// Middleware to check if admin
const isAdmin = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const decoded = require('jsonwebtoken').verify(token, process.env.JWT_SECRET);
        if (decoded.role !== 'admin') return res.status(403).json({ message: 'Access denied' });
        next();
    } catch (err) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Get all students (admins are NEVER returned — passwords are NEVER sent)
router.get('/students', isAdmin, async (req, res) => {
    try {
        const students = await User.find({ role: 'student' }).select('-password -__v');
        res.json(students);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update student subscription (Manual approval)
router.post('/approve-subscription', isAdmin, async (req, res) => {
    try {
        const { userId, type, durationDays } = req.body;
        const endDate = new Date();
        endDate.setDate(endDate.getDate() + durationDays);

        await User.findByIdAndUpdate(userId, {
            subscription: {
                type,
                startDate: new Date(),
                endDate,
                isActive: true
            }
        });
        res.json({ message: 'Subscription approved successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Live Link Management
router.get('/live-link', async (req, res) => {
    try {
        let session = await LiveSession.findOne();
        if (!session) {
            session = new LiveSession({ currentLink: '' });
            await session.save();
        }
        res.json(session);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/update-link', isAdmin, async (req, res) => {
    try {
        const { link } = req.body;
        let session = await LiveSession.findOne();
        if (!session) {
            session = new LiveSession({ currentLink: link });
        } else {
            session.currentLink = link;
            session.lastUpdated = Date.now();
        }
        await session.save();
        res.json({ message: 'Link updated successfully', session });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
