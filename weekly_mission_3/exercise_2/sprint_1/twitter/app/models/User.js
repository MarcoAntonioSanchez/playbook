class User {
  constructir(id, username, name, bio, dateCreate, lastUpdated) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.dateCreate = dateCreate;
    this.lastUpdated = lastUpdated;
  }
}

module.exports = User;
