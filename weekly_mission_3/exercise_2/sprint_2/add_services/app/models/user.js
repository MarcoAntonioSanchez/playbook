class User {
  constructor(id, username, name, bio) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
  }

  set setUsername(newUsername) {
    this.username = newUsername;
  }
}

module.exports = User;
