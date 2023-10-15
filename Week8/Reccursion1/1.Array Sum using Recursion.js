let arr = [1, 2, 3, 4, 5, 6];

function sumArr(arr) {
//Check if the array is empty. If so, return 0 as the sum (base case).
  if (arr.length === 0) {
    return 0;
  } else {
    //Otherwise, extract the first element of the array and add it to the sum of the remaining elements obtained by calling the recursive function on the rest of the array.
    sum = arr[0] + sumArr(arr.slice(1));
    // Return the result.
    return sum;
  }
}

console.log(sumArr(arr));
