const profile = {
  name: "José Luis",
  carModel: "Tesla model x",
  carPlates: "01-RVN-X0",
  trips: 500,
  rating: 9.5,
  years: 2,
  lenguaje: "English",
  country: "US",
  city: "California",
  funFact: "Recomendatios about museums and concerts",
  favoriteUberStory: "Best ride of my life",
  riderCompliments: [
    "Very fast",
    "Nice person",
    "Recomended for a quick and quality service",
  ],
  riderThankYouNotes: 1,
  getTotalMetrics: function () {
    return this.trips + this.rating + this.years;
  },
  getTotalCompliments: function () {
    return this.riderCompliments.length;
  },
};

console.log("Nombre del conductor: " + profile.name);
console.log("Calificación: " + profile.getTotalMetrics());
console.log(profile.getTotalCompliments());
