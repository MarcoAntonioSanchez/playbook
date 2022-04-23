class Pokemon {
  constructor(name) {
    this.name = name;
  }

  sayHello(hi) {
    console.log(`Mi pokemon: ${this.name} te saluda!!!`);
  }

  sayMessage(message) {
    console.log(`Mi pokemon: ${this.name} dice: ${message}`);
  }
}

module.exports = Pokemon;
