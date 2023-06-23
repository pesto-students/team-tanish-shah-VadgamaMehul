// Your solution goes here

function drawTriangle(triangleSize) {
  let string = "";

  for (let i = 0; i < triangleSize; i++) {
    for (let j = i; j > 0; j--) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}
drawTriangle(5);
