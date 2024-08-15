const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({
    name: { type: String, required: true },

    description: { type: String, required: true },

    price: { type: Number, required: true },

    availableSlots: { type: Number, required: true },
    
    resort: { type: mongoose.Schema.Types.ObjectId,
         ref: 'Resort', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Activity', ActivitySchema);
