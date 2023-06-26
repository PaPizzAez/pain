const fighters = []; // This would be replaced with a database implementation

class FighterRepository {
	getAllFighters() {
		return fighters;
	}

	getFighterById(id) {
		return fighters.find((fighter) => fighter.id === id);
	}

	createFighter(fighter) {
		fighters.push(fighter);
		return fighter;
	}

	updateFighter(id, updatedFighter) {
		const fighterIndex = fighters.findIndex((fighter) => fighter.id === id);
		if (fighterIndex !== -1) {
			fighters[fighterIndex] = updatedFighter;
			return updatedFighter;
		}
		return null;
	}

	deleteFighter(id) {
		const fighterIndex = fighters.findIndex((fighter) => fighter.id === id);
		if (fighterIndex !== -1) {
			const deletedFighter = fighters.splice(fighterIndex, 1);
			return deletedFighter[0];
		}
		return null;
	}
}

module.exports = new FighterRepository();
