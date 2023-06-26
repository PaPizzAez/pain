const express = require('express');
const UserService = require('../services/userService');

const router = express.Router();

// GET /api/users
router.get('/', (req, res) => {
	const users = UserService.getUsers();
	res.json(users);
});

// GET /api/users/:id
router.get('/:id', (req, res) => {
	const user = UserService.getUserById(req.params.id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).json({ error: true, message: 'User not found' });
	}
});

// ... other routes

module.exports = router;
