/*
  node main.js
*/

const logger1 = require('./logger_1') // Importando la función del archivo logger_1.js y almacenandolo en la variable logger1
const logger2 = require('./logger_2') // Importando la función del archivo logger_2.js y almacenandolo en la variable logger2

logger1('This is an informational message') // Asignando el texto indicado en el parámetro message correspondiente a la función en logger_1.js
logger2.verbose('This is a verbose message') // Asignando el texto indicado en el parámetro message correspondiente a la función en logger_2.js
