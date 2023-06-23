const person1 = {};

Object.defineProperty(person1, "name", {
  value: "Mehul",
  writable: false,
});

Object.defineProperty(person1, "age", {
  value: 0,
  writable: true,
});

Object.defineProperty(person1, "email", {
  value: "abc@abc.com",
  writable: false,
});
Object.defineProperty(person1, "getAge", {
  value: function () {
    return this.age;
  },
});
Object.defineProperty(person1, "setAge", {
  value: function(newAge){
    this.age = newAge;
  }
});

console.log(" ");
console.log(person1); //output : { }
console.log(person1.name); //output : Mehul
console.log(person1.email); //output : abc@abc.com
console.log(person1.age); //output : 0
console.log(person1.getAge()); //output : 0
person1.setAge(20); //set age = 22
console.log(person1.getAge()); //output : 20
person1.age = 25; // this will change bcz of age is write only
person1.age = 21; // this will change  bcz of age is write only
person1.name = "adsjkhkd"; // this will ignore bcz of name is not write only
console.log(person1.getAge()); //output : 22
console.log(person1.age); //output : 22
console.log(person1.name);