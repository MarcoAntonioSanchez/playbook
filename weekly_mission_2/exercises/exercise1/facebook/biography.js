const bio = {
  profile: "@MarcoASanchez",
  about: "I am a happy person",
  birthday: "07 09 94",
  relationStatus: false,
  interests: ["skate", "developement", "movies", "hip-hop", "e-sports"],
  friends: 100,
  followers: 5,
  pictures: ["profile pictures", "portrait", "uploads"],
  getInterests: function () {
    return (
      this.interests[0] + ", " + this.interests[1] + ", " + this.interests[4]
    );
  },
  getGeneralInfo: function () {
    return `This facebook bio belongs to: ${this.profile} and says: ${this.about}`;
  },
};

console.log("Perfil de la biografía: " + bio.profile);
console.log("Intereses: " + bio.getInterests());
console.log(bio.getGeneralInfo());
