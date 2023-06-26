const app = require('./app');

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server started on port ${port}`);
	console.log(`Server URL: http://localhost:${port}`);
});