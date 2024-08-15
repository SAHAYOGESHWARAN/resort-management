const express = require('express');
const { getAllResorts, getResortById, addResort } = require('../controllers/resortcontroller');
const router = express.Router();

router.get('/', getAllResorts);
router.get('/:id', getResortById);
router.post('/', addResort);

module.exports = router;
