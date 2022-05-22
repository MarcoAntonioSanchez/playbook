const trendingTopic = {
  title: "Tendencias",
  hashtag: "#FelizDíaDelNiño",
  comment: "Este 30 de abril se celebra el día del niño en México",
  retweet: false,
  totalTweets: 35800,
  getTotalTweets: function () {
    return this.totalTweets;
  },
  getGeneralInfo: function () {
    return `This trending topic ${this.title} has this hashtag ${this.hashtag}`;
  },
};

console.log("Titulo del trending:" + trendingTopic.title);
console.log("Tweets totales: " + trendingTopic.getTotalTweets());
console.log(trendingTopic.getGeneralInfo());
