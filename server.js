const express = require('express');
const path = require('path');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const resortRoutes = require('./routes/resortRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const activityRoutes = require('./routes/activityRoutes');
const homeRoutes = require('./routes/homeRoutes'); // Import Home Routes
require('dotenv').config();

connectDB();

const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path for views and public (static) files
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON
app.use(express.json());

// Define routes
app.use('/api/users', userRoutes);
app.use('/api/resorts', resortRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/activities', activityRoutes);
app.use('/', homeRoutes); // Home Route

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const cors = require('cors');
app.use(cors());
