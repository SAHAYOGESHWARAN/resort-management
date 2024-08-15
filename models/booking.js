const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    resort: { type: mongoose.Schema.Types.ObjectId, ref: 'Resort', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalPrice: { type: Number, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);
