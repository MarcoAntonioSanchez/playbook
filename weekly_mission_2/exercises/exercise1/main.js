const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  issue: {
    title: "title",
    repositoryNameAssociated: "name associated",
    status: "testing",
    numberOfCommits: "32",
    labels: "github",
    author: "MarcoAntonioSanchez",
    dateCreated: "April 2022",
    lastUpdated: "April 2022",
  },
  pullRequest: {
    title: "titulo",
    branchName: "nombre del branch",
    dateCreated: "APril 22",
    status: "testing",
    repositoryNameAssociated: "nombre asociado",
  },
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
  getTitleAndAuthor: function () {
    return `Title: ${this.issue.title} Author: ${this.issue.author}`;
  },
};

// Testing repo object data values
console.log("Nombre del repo:" + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

// Testing issue object data values
/*
console.log("Titulo y autor" + repo.issue.getTitleAndAuthor());
console.log(repo.issue.getGeneralInfo());*/

// Testing pulRequest object data values
/*console.log();
console.log();
console.log();*/
