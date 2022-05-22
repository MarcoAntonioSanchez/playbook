class User {
  constructor(id, username, name, bio, dateCreated, lastUpdated) {
    this.id = id;
    this.username = username;
    this.name = name;
    this.bio = bio;
    this.dateCreated = dateCreated;
    this.lastUpdated = lastUpdated;
  }
  showInfo() {
    return `Id: ${this.id} /n User name: ${this.username} /n Name: ${this.name} /n Bio: ${this.bio} /n Created on: ${this.dateCreated} /n Updated on: ${this.lastUpdated}`;
  }
}

module.exports = User;
