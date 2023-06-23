//Create a class named "Person" with the properties: Name: string, Age: number, Gender: string, Nationality: string
class Person {
    constructor(name, age, gender, nationality) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.nationality = nationality;
    }
    //Create a method named "introduce" in the Person class that returns a string containing the person's name, age, gender, and nationality.
    introduce() {
      return `My name is ${this.name} , I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}.`;
    }
  }
  
  //Create a subclass named "Student" that inherits from the Person class.
  class Student extends Person {
    //Add a new property to the Student class named "subject" of type string.
    constructor(name, age, gender, nationality, subjact) {
      super(name, age, gender, nationality);
      this.subjact = subjact;
    }
  
    //Create a method named "study" in the Student class that returns a string containing the subject that the student is studying.
    study() {
      return `My name is ${this.name}, I am ${this.age} years old, I am ${this.gender}, and I am ${this.nationality}. I am studying ${this.subjact}.`;
    }
  }
  
  //Create three instances of the Person class and assign values to their properties.
  let Person_instance_1 = new Person("John", 25, "Male", "American");
  let Person_instance_2 = new Person("Jane", 30, "Female", "Canadian");
  let Person_instance_3 = new Person("Bob", 20, "Male", "Australian");
  
  //Call the introduce method on each instance and print the returned string to the console.
  console.log("Person instance 1: " + Person_instance_1.introduce());
  console.log("Person instance 2: " + Person_instance_2.introduce());
  console.log("Person instance 3: " + Person_instance_3.introduce());
  
  //Create an instance of the Student class and assign values to its properties.
  let Student_instance_1 = new Student(
    "Sarah",
    18,
    "Female",
    "British",
    "Computer Science"
  );
  
  //Call the introduce method on the Student instance and print the returned string to the console.
  console.log("Student instance 1: " + Student_instance_1.introduce());
  
  //Call the study method on the Student instance and print the returned string to the console.
  console.log("Student instance 2: " + Student_instance_1.study());