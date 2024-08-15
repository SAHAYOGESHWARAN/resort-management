const Resort = require('../models/resort');

// Get all resorts
const getAllResorts = async (req, res) => {
    // logic to fetch resorts
};

// Get a single resort by ID
const getResortById = async (req, res) => {
    // logic to fetch resort by ID
};

// Add a new resort (admin only)
const addResort = async (req, res) => {
    // logic to add new resort
};

module.exports = { 
    getAllResorts,
     getResortById,
      addResort };
