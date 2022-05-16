const travel = {
  startingLocation: "pickup address goes here",
  finalDestination: "drop address goes here",
  estimatedTime: "45:00 mints.",
  ellapsedTime: "05:33 mints.",
  driver: "José Luis",
  passenger: "Rigoberto",
  getDestinationEstTime: function () {
    return this.finalDestination + this.estimatedTime;
  },
  getDriversName: function () {
    return this.driver;
  },
  getPassengersName: function () {
    return this.passenger;
  },
};

console.log(
  "Tiempo estimado y destino final: " +
    travel.estimatedTime +
    " " +
    travel.finalDestination
);
console.log("Conductor: " + travel.getDriversName());
console.log("Pasajero: " + travel.getPassengersName());
