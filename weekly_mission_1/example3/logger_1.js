/*
  Esto también es la declaración de una función

  module.exports hará que puedas invocar esta función en otro script como:
  > const logger = require('./logger')

  y usarla como:

  > logger("Heeey!")
*/

module.exports = (message) => { // Inicia arrow function ya exportada con el parámetro message
  console.log(`info: ${message}`) // Imprime en pantalla el valor del parámetro message dentro del contenido info
}
