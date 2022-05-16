const bio = {
  profile: "@MarcoASanchez",
  about: "I am a happy person",
  birthday: "07 09 94",
  relationStatus: false,
  interests: ["skate", "developement", "movies", "hip-hop", "e-sports"],
  friends: 100,
  followers: 5,
  pictures: ["profile pictures", "portrait", "uploads"],
};

class newBio {
  constructor(profile, about, birthday, relationStatus, friends, followers) {
    this.profile = profile;
    this.about = about;
    this.birthday = birthday;
    this.relationStatus = relationStatus;
    this.friends = friends;
    this.followers = followers;
  }

  checkBio() {
    return `${this.profile} is a brand new bio profile`;
  }
}

const facebookBio = new newBio(
  "@NewProfile",
  "This is a new profile",
  "01 01 01",
  true,
  01,
  01
);
console.log(facebookBio);
console.log(facebookBio.checkBio());
