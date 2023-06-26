// app.js
const express = require('express');
const formatResponse = require('./response.middleware');
const userRoutes = require('./routes/userRoutes');
const fighterRoutes = require('./routes/fighterRoutes');



const app = express();

// Middleware
app.use(express.json());
app.use(formatResponse);

// Mount routes
app.use('/api/users', userRoutes);
app.use('/api/fighters', fighterRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
	console.error(err.stack);
	res.jsonError(500, 'Server Error');
});

module.exports = app;
