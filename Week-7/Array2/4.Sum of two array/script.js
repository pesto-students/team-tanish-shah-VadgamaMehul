// Step 1 - Define a function to take input for a 2D array
function getInputArray() {
  // Step 2 - Prompt the user to enter the number of rows and columns
  const rows = parseInt(prompt("Enter the number of rows:"));
  const cols = parseInt(prompt("Enter the number of columns:"));

  const array = [];

  // Step 3 - Use nested loops to iterate through each element of the array and store the user-entered values
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      const element = parseInt(prompt(`Enter the element at position (${i}, ${j}):`));
      row.push(element);
    }
    array.push(row);
  }

  return array;
}

// Step 4 - Define a function to calculate the sum of two 2D arrays
function calculateSumOfArrays(array1, array2) {
  // Perform error handling to check if the dimensions of the arrays match
  if (array1.length !== array2.length || array1[0].length !== array2[0].length) {
    throw new Error("Arrays must have the same dimensions");
  }

  const sumArray = [];

  // Step 5 - Use nested loops to iterate through the elements of the arrays
  for (let i = 0; i < array1.length; i++) {
    const row = [];
    for (let j = 0; j < array1[i].length; j++) {
      // Step 6 - Add the corresponding elements of array1 and array2 and store the sum in sumArray
      const sum = array1[i][j] + array2[i][j];
      row.push(sum);
    }
    sumArray.push(row);
  }

  // Step 7 - Return the sumArray as the result of the calculation
  return sumArray;
}

// Usage example
try {
  console.log("Enter the first matrix:");
  const array1 = getInputArray();

  console.log("Enter the second matrix:");
  const array2 = getInputArray();

  const sumArray = calculateSumOfArrays(array1, array2);
  console.log("Sum of the two matrices:", sumArray);
} catch (error) {
  console.error(error.message);
}
