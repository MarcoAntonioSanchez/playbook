console.log("\n Ejemplo 1: Creación de un objeto con propiedades \n")
const explorer = {
	name: "Marco",
	age: "27",
	mission: "Node JS",
	stack: ["js", "node", "react", "vue"],
	blog: {
	 url: "https://marcoantoniosanchez.github.io/my_launchx_blog",
	 posts: 5
 }
}
console.log(explorer)

console.log("\n Ejemplo 2: Accediendo a las propiedades del objeto \n")

console.log("nombre: " + explorer.name)
console.log("edad: " + explorer["age"])

console.log("\n Ejemplo 3: Objeto con métodos! \n")
const ajolonauta = {
	name: "Woopa",
	mission: "Node JS",
	sayHelloToExplorers: function() {
		console.log("Hola, soy el Ajolonauta")
},
tellMeMore: function(){
	return `Ajolonauta: ${this.name}`
}
}
console.log("\najolonauta:\n")
console.log(ajolonauta)
ajolonauta.sayHelloToExplorers()
console.log(ajolonauta.tellMeMore())
