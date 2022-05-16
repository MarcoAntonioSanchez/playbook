const user = {
  user: "Marco A. Sánchez",
  username: "@RavenMilosh",
  bio: "SVHD Team member",
  country: "México",
  birthday: "07 09 94",
  signUpDate: "March 2011",
  follows: 175,
  followers: 168,
  tweets: 10,
  responses: 10,
  media: 20,
  likes: 10,
  getTotalTweets: function () {
    return this.tweets + this.responses + this.media + this.likes;
  },
  getGeneralInfo: function () {
    return `This profile ${this.user} was created on ${this.signUpDate}`;
  },
};

console.log("Nombre de usuario:" + user.username);
console.log("Tweets totales: " + user.getTotalTweets());
console.log(user.getGeneralInfo());
