const pullRequest = {
  title: "Diagram objects",
  branchName: "main",
  dateCreated: "April 22",
  status: "testing",
  repositoryNameAssociated: "MarcoAntonioSanchez/playbook",
  getStatus: function () {
    return this.status;
  },
  getTitleAndAuthor: function () {
    return `This pull request ${this.title} was created by ${this.author}`;
  },
};

console.log("Nombre del repo:" + pullRequest.name);
console.log("Issues totales: " + pullRequest.getStatus());
console.log(pullRequest.getTitleAndAuthor());
