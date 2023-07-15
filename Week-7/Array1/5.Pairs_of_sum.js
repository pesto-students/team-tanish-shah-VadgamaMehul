let arr = [1, 1, 1, 1, 1];
let sum = 2;

function findPair(arr, targetSum) {
  const pairArry = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairArry.push([arr[i], arr[j]]);
      }
    }
  }
  return pairArry;
}

console.log(findPair(arr, sum));
