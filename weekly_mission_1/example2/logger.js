// logger.js

// Esta es una función que se guardara en este módulo como info
exports.info = (message) => { // Inicia arrow function ya exportada y con el parámetro message para manipular
  console.log(`info: ${message}`) // Imprime en pantalla la función info con el valor del parametro message
}

// Esta es una función que se guardara en este módulo como verbose
exports.verbose = (message) => { // Inicia arrow function ya exportada y con el parámetro message
  console.log(`verbose: ${message}`) // Imprime en pantalla la función verbose con el valor del parámetro message
}

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */

/*
  const logger = require('./logger')
  logger.info('This is an informational message')
  logger.verbose('This is a verbose message')
 * */
