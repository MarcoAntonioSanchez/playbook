const Spiderman = require("./../app/spiderman");

describe("Unit Tests for Spiderman class", () => {
  test("1) Create an spiderman object", () => {
    // Aquí escribimos el código que queremos usar tal cuiál
    // Quiero poder instanciar un objecto Spiderman con esta información
    const andrewGarfield = new Spiderman(
      "Spiderman Sony",
      31,
      "Andrew Garfield",
      31,
      "Sony"
    );
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.movies).toBe(31);
    expect(andrewGarfield.studio).toBe("Sony");
  });
});
