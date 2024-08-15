const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const resortRoutes = require('./routes/resortRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
require('dotenv').config();

connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/resorts', resortRoutes);
app.use('/api/bookings', bookingRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
