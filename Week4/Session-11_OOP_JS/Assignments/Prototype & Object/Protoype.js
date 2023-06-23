
function Vehicle(make,model,year){
    this.make = make;
    this.model = model;
    this.year = year;
}

Vehicle.prototype.getDetails = function(){
    return `This is a ${this.make} and model is ${this.model}, made in the year of: ${this.year}`;
}

function Car(make,model,year,numDoors){
    //call super constructor with arguments passed to it from parent class (Vehicle)
    Vehicle.call(this,make,model,year);
    this.numDoors = numDoors;
}

Car.prototype.getDetails = function(){
    return `This is a ${this.make} and model is ${this.model}, made in the year of: ${this.year} it has ${this.numDoors} doors`;
}

let vehicle = new Vehicle('Honda','Civic',2022);
console.log(vehicle.getDetails());

let car = new Car('Honda','Civic',2022, 4);
console.log(car.getDetails());