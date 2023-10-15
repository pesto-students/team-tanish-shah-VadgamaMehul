let arr = [1, 2, 3, 2, 4, 2, 5];
let oldKey = 2;
let newKey = 6;

function keyReplace(arr, oldKey, newKey) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === oldKey) {
      arr[i] = newKey;
    }
  }
  return arr;
}

console.log(keyReplace(arr, oldKey, newKey));
