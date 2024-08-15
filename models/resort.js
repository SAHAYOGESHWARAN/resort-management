const mongoose = require('mongoose');

const ResortSchema = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    pricePerNight: { type: Number, required: true },
    description: { type: String },
    amenities: [String],
    availability: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Resort', ResortSchema);
