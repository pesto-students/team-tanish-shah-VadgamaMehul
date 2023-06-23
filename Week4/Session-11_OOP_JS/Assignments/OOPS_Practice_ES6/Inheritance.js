class vehicle {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  drive() {
    console.log(`Driving ${make} ${model}."`);
  }
}

//inheritate vehicle cass to car
class car extends vehicle {
  constructor(numSeat) {
    this.numSeat = numSeat;
  }
}

//inheritate vehicle cass to Ridesharecar
class RideShareCar extends car {
  constructor(isAvailable) {
    this.isAvailable = isAvailable;
  }
}
