const Activity = require('../models/activity');

// Get all activities for a resort
const getAllActivities = async (req, res) => {
    try {
        const activities = await Activity.find({ resort: req.params.resortId });
        res.json(activities);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single activity by ID
const getActivityById = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }
        res.json(activity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add a new activity (admin only)
const addActivity = async (req, res) => {
    try {
        const { name, description, price, availableSlots, resort } = req.body;
        const newActivity = new Activity({ name, description, price, availableSlots, resort });
        await newActivity.save();
        res.status(201).json(newActivity);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Book an activity (reduce available slots)
const bookActivity = async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.id);
        if (!activity) {
            return res.status(404).json({ message: 'Activity not found' });
        }

        if (activity.availableSlots <= 0) {
            return res.status(400).json({ message: 'No slots available' });
        }

        activity.availableSlots -= 1;
        await activity.save();
        res.json({ message: 'Activity booked successfully', activity });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getAllActivities, getActivityById, addActivity, bookActivity };
