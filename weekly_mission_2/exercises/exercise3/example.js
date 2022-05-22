console.log("POO");

// objeto de js
const woopa_obj = {
  name: "Woopa",
  mission: "Node JS",
  age: "27",
  color: "pink",
};

// crear una clase
/*
1. Como crear una clase
2. Como instanciar un objeto de una clase
3. Instanciar varios objetos de una misma clase
4. Como agregar el constructor para guardar atributos al crear un objeto
5. Crear métodos
*/

class Ajolonauta {
  constructor(name, mission, age, color) {
    this.name = name;
    this.mission = mission;
    this.age = age;
    this.color = color;
  }
  sayHello() {
    return `Hey! Hello ${this.name} is saying hello!`;
  }
}

// objeto de js
const woopa_obj_js = {};
console.log(woopa_obj_js);

const woopa = new Ajolonauta("Woopa", "Node JS", 18, "Pink"); // instanciar un objeto
console.log(woopa);
console.log(woopa.sayHello());

const wooper = new Ajolonauta("Wooper", "Java", "10", "Blue");
console.log(wooper.name);
