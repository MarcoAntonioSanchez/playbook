const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"], //primer objeto
    missions: {
      //segundo objeto
      onboarding: { isFinished: true, exercisesFinished: true }, //tercer objeto
      frontend: { isFinished: true, exercisesFinished: true }, //tercer objeto
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

console.log(
  "\n Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH \n"
);
explorers.forEach((item, index, arr) => {
  console.log(item.name);
});

console.log("\n Imprime el stack de cada explorer, usa FOR EACH \n");

explorers.forEach((item, index, arr) => {
  console.log(item.stack);
});

console.log(
  "\n Crea una nueva lista con las listas de stacks de cada explorer, usa MAP \n"
);
