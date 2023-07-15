// Step 1 - Define a function to take input for a 2D array
function takeMatrixInput() {
  // Prompt the user to enter the number of rows and columns
  const rows = parseInt(prompt("Enter the number of rows:"));
  const cols = parseInt(prompt("Enter the number of columns:"));

  const matrix = [];

  // Use nested loops to iterate through each element of the matrix and store the user-entered values
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const element = parseInt(prompt(`Enter the element at position (${i}, ${j}):`));
      row.push(element);
    }
    matrix.push(row);
  }

  return matrix;
}

// Step 2 - Define a function to transpose a matrix
function transposeMatrix(matrix) {
  const transposedMatrix = [];

  // Use nested loops to iterate through the elements of the matrix
  for (let i = 0; i < matrix[0].length; i++) {
    const row = [];
    for (let j = 0; j < matrix.length; j++) {
      // Switch the position of the iterators to transpose the matrix
      row.push(matrix[j][i]);
    }
    transposedMatrix.push(row);
  }

  return transposedMatrix;
}

// Usage example
console.log("Enter the matrix:");
const matrix = takeMatrixInput();

const transposedMatrix = transposeMatrix(matrix);
console.log("Transposed matrix:");
for (let i = 0; i < transposedMatrix.length; i++) {
  console.log(transposedMatrix[i].join(" "));
}
