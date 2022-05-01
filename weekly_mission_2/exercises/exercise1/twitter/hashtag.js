const hashtag = {
  content: "#DíaDelNiño",
  author: "@RavenMilosh",
  publishDate: "April 22",
  comments: 50,
  likes: 200,
  retweets: 1500,
  getTotalInteractions: function () {
    return this.comments + this.likes + this.retweets;
  },
  getGeneralInfo: function () {
    return `This hashtag ${this.content} was published on ${this.publishDate} by: ${this.author}`;
  },
};

console.log("Nombre del hashtag: " + hashtag.content);
console.log("Interacciones totales: " + hashtag.getTotalInteractions());
console.log(hashtag.getGeneralInfo());
