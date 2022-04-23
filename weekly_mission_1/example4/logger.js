class Logger {
  constructor(name) {
    // Esta es una variable para referenciar el valor del contexto local de esta clase
    this.name = name // Estás variables son conocidas como atributos
  }

  // método 
  // this.name es la variable que se guarda en el contexto local
  // message es una variable que se le pasa al ejecutar este método

  info (message) { // Llamando a la función info con el parámetro message
    console.log(`[Objeto con nombre: ${this.name}] info: ${message}`) // Imprimiendo un objeto con nombre contenido en el atributo this.name
  }

  // método
  verbose (message) { // Llamando a la función info con el parámetro message
    console.log(`[Objeto con nombre: ${this.name}] verbose: ${message}`) // Imprimiendo un objeto con nombre contenido en el atributo this.name
  }
}

// Esta clase se exporta en este módulo
module.exports = Logger
