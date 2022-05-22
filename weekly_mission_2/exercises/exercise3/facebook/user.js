const user = {
  name: "Marco Antonio Sánchez",
  username: "@MarcoASanchez",
  age: 27,
  country: "México",
  city: "CDMX",
  education: "Launch X",
  work: "Freelance",
  friends: 100,
  post: 50,
  comments: 25,
  likes: 10,
  creationDate: "April 22",
  getTotalInteractions: function () {
    return this.likes + this.comments + this.post;
  },
  getGeneralInfo: function () {
    return `This facebook profile is from: ${this.name} was created on ${this.creationDate} , ${this.username} has ${this.age} years old and lives in ${this.country} ${this.city}`;
  },
};

console.log("Nombre de usuario: " + user.username);
console.log("Interacciones totales: " + user.getTotalInteractions());
console.log(user.getGeneralInfo());
