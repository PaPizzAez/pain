// services/userService.js
const UserRepository = require('../repositories/userRepository');

class UserService {
	getAllUsers() {
		return UserRepository.getAllUsers();
	}

	getUserById(id) {
		return UserRepository.getUserById(id);
	}

	createUser(user) {
		return UserRepository.createUser(user);
	}

	updateUser(id, updatedUser) {
		return UserRepository.updateUser(id, updatedUser);
	}

	deleteUser(id) {
		return UserRepository.deleteUser(id);
	}
}

module.exports = new UserService();
