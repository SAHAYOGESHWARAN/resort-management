const express = require('express');
const { createBooking, getUserBookings } = require('../controllers/bookingcontroller');
const router = express.Router();

router.post('/', createBooking);
router.get('/user', getUserBookings);

module.exports = router;
