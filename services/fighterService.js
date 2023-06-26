// services/fighterService.js
const FighterRepository = require('../repositories/fighterRepository');

class FighterService {
	getAllFighters() {
		return FighterRepository.getAllFighters();
	}

	getFighterById(id) {
		return FighterRepository.getFighterById(id);
	}

	createFighter(fighter) {
		return FighterRepository.createFighter(fighter);
	}

	updateFighter(id, updatedFighter) {
		return FighterRepository.updateFighter(id, updatedFighter);
	}

	deleteFighter(id) {
		return FighterRepository.deleteFighter(id);
	}
}

module.exports = new FighterService();
