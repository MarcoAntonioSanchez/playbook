// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed) {
    this.repo = repo;
    this.title = title;
    this.lines_changed = lines_changed;
    this.status = "OPEN";
    this.dateCreated = new Date(); // esto guardará la fecha actual en que se instancia el objeto
  }

  getInfo() {
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`;
  }
}

console.log("Ejemplo 5: Atributos con valores por default");
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 1);
console.table(myPR1.getInfo()); // console.table no funciona ya que se imprime una función directamente y no data de un objeto como tal

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 0);
console.log(myPR2.getInfo());
