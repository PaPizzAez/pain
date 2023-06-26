const users = []; // This would be replaced with a database implementation

class UserRepository {
	getAllUsers() {
		return users;
	}

	getUserById(id) {
		return users.find((user) => user.id === id);
	}

	createUser(user) {
		users.push(user);
		return user;
	}

	updateUser(id, updatedUser) {
		const userIndex = users.findIndex((user) => user.id === id);
		if (userIndex !== -1) {
			users[userIndex] = updatedUser;
			return updatedUser;
		}
		return null;
	}

	deleteUser(id) {
		const userIndex = users.findIndex((user) => user.id === id);
		if (userIndex !== -1) {
			const deletedUser = users.splice(userIndex, 1);
			return deletedUser[0];
		}
		return null;
	}
}

module.exports = new UserRepository();
