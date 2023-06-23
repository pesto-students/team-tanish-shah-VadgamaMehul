class shape {
  calculateArea() {}
}

class Rectangle extends shape {
  calculateArea(width, height) {
    console.log(width * height);
  }
}

let Rect = new Rectangle();
Rect.calculateArea(2, 3);

class Triangle extends shape {
  calculateArea(base, height) {
    console.log((base * height) / 2);
  }
}

let trg = new Triangle();
trg.calculateArea(2, 3);

class Circle extends shape {
  calculateArea(radius) {
    console.log(Math.PI * radius * radius);
  }
}

let circle = new Circle();
circle.calculateArea(2);
