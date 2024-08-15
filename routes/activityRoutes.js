const express = require('express');
const { getAllActivities, getActivityById, addActivity, bookActivity } = require('../controllers/activityController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

// Get all activities for a resort
router.get('/:resortId', getAllActivities);

// Get a single activity by ID
router.get('/activity/:id', getActivityById);

// Add a new activity (admin only)
router.post('/', protect, addActivity);


// Book an activity
router.post('/book/:id', protect, bookActivity);

module.exports = router;
