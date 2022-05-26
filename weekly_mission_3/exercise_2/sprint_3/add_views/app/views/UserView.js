const UserService = require("../../app/models/User");

class UserView {
  static createUser(payload) {
    return UserService.create(
      payload.User,
      payload.username_receiver,
      payload.username_receptor
    );
  }
}

module.exports = UserView;
