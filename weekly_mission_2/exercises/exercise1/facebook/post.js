const post = {
  author: "@MarcoASanchez",
  content: "This is an example of a comment =D",
  comments: 20,
  likes: 10,
  shares: 2,
  creationDate: "April 22",
  lastUpdated: "April 23",
  getTotalInteractions: function () {
    return this.comments + this.likes + this.shares;
  },
  getGeneralInfo: function () {
    return `This facebook comment was created by: ${this.author} on ${this.creationDate} and last updated on ${this.lastUpdated}`;
  },
};

console.log("Autor del comentario: " + post.author);
console.log("Interacciones totales: " + post.getTotalInteractions());
console.log(post.getGeneralInfo());
