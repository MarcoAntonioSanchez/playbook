const User = require("../../app/models/User");

class UserView {
  static createUser(id, username, name) {
    return new User(id, username, name);
  }
}

module.exports = UserView;
