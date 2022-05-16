const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

const issue = {
  title: "duda número 1",
  repositoryNameAssociated: "nombre del repo",
  status: "status",
  numberOfCommits: 33,
  labels: "launchx",
  author: "MarcoAntonioSanchez",
  dateCreated: "April 21",
  lastUpdated: "April 22",
  getTitleAndAuthor: function () {
    return this.title + " por: " + this.author;
  },
  getGeneralInfo: function () {
    return `This issue was created on: ${this.dateCreated} and last updated on: ${this.lastUpdated}`;
  },
};

console.log(issue.getTitleAndAuthor());
console.log(issue.getGeneralInfo());

const pullRequest = {
  title: "PR número 1",
  branchName: "nombre del branch",
  dateCreated: "April 23",
  status: "estado",
  repositoryNameAssociated: "Marco",
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return `This pull request ${this.title} was created by ${this.repositoryNameAssociated}`;
  },
};

console.log(pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
