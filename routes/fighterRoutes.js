const express = require('express');
const FighterService = require('../services/fighterService');

const router = express.Router();

// GET /api/fighters
router.get('/', (req, res) => {
	const fighters = FighterService.getFighters();
	res.json(fighters);
});

// GET /api/fighters/:id
router.get('/:id', (req, res) => {
	const fighter = FighterService.getFighterById(req.params.id);
	if (fighter) {
		res.json(fighter);
	} else {
		res.status(404).json({ error: true, message: 'Fighter not found' });
	}
});

// ... other routes

module.exports = router;
