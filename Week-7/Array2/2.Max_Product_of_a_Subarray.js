// function maxProductSubarray(array) {
//   // Initialize maxProduct, minProduct, and result with the first element of the array.
//   let maxProduct = array[0];
//   let minProduct = array[0];
//   let result = array[0];

//   // Iterate through the array starting from the second element.
//   for (let i = 1; i < array.length; i++) {
//     // If the current number is negative, swap maxProduct and minProduct since multiplying by a negative number can change the maximum and minimum values.
//     if (array[i] < 0) {
//       let temp = maxProduct;
//       maxProduct = minProduct;
//       minProduct = temp;
//     }

//     // Update maxProduct by taking the maximum of the current number, the product of the previous maximum product and the current number, and the product of the previous minimum product and the current number.
//     maxProduct = Math.max(array[i], maxProduct * array[i], minProduct * array[i]);

//     // Update minProduct by taking the minimum of the current number, the product of the previous maximum product and the current number, and the product of the previous minimum product and the current number.
//     minProduct = Math.min(array[i], maxProduct * array[i], minProduct * array[i]);

//     // Update result by taking the maximum of result and maxProduct.
//     result = Math.max(result, maxProduct);
//   }

//   // Return result as the maximum product of a subarray.
//   return result;
// }
// let arr = [5,2,3,-2,4,5];
// console.log("Maximum Product SubArray: ", maxProductSubarray(arr))


function findMaxProductSubarray(arr) {
  // Step 1 - Initialize variables
  let maxProduct = arr[0];
  let minProduct = arr[0];
  let result = arr[0];

  // Step 2 - Iterate through the array
  for (let i = 1; i < arr.length; i++) {
    // Step 3 - Handle negative numbers
    if (arr[i] < 0) {
      // Swap maxProduct and minProduct
      [maxProduct, minProduct] = [minProduct, maxProduct];
    }

    // Step 4 - Update maxProduct
    maxProduct = Math.max(arr[i], maxProduct * arr[i]);

    // Step 5 - Update minProduct
    minProduct = Math.min(arr[i], minProduct * arr[i]);

    // Step 6 - Update result
    result = Math.max(result, maxProduct);
  }

  // Step 7 - Return the maximum product
  return result;
}

// Test Case 1
const arr1 = [2, 3, -2, 4, 5];
const maxProduct1 = findMaxProductSubarray(arr1);
console.log(maxProduct1); // Output: 20

// Test Case 2
const arr2 = [-1, -2, -3, -4];
const maxProduct2 = findMaxProductSubarray(arr2);
console.log(maxProduct2); // Output: 24
