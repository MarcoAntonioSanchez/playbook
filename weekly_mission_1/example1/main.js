// 1. Creación de un objeto con propiedades

let myCar = new Object(); // Creación de un objeto
myCar.make = "Ford"; // Guardando un valor dentro del objeto creado
myCar.model = "Mustang"; // Guardando el 2do valor
myCar.year = 1969; // Guardando el 3er valor

console.log(myCar); // Imprimiendo objeto

// 2. Declaración de un objeto con variables locales y públicas

const myModule = (() => {
  // Inicia arrow función

  // Variables de contexto local
  const privateFoo = "Soy un valor privado, solo me usan dentro de este objeto";
  const privateBar = [1, 2, 3, 4];
  const baz = "Soy un valor que va a ser expuesto";

  // Variable para guardar las variables locales
  const exported = {
    publicFoo: "Valor público, pueden verme desde donde me llamen",
    publicBar: "Otro valor público",
    publicBaz: baz, // Almacenando la variable baz dentro del valor publicBaz del objeto exported
  };

  // Exposición de variables locales
  return exported; // Regresando el objeto exported para exportarlo
})();

console.log(myModule); // Imprimir en pantalla la función myModule

console.table(myModule);
