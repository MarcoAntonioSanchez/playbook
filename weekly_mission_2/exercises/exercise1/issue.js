const issue = {
  title: "Diagram objects",
  repositoryNameAssociated: "playbook",
  status: "testing",
  numberOfCommits: 28,
  labels: "exercise",
  author: "MarcoAntonioSanchez",
  dateCreated: "April 22",
  lastUpdated: "April 22",
  getTitleAndAuthor: function () {
    return this.title + this.author;
  },
  getGeneralInfo: function () {
    return `This repository ${this.title} was created by ${this.author}`;
  },
};

console.log("Titulo:" + issue.title);
console.log("Titulo y author: " + issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());
