const str = "-10 20 100 50 -50";
console.log(sumOfMaxMin(str));

function sumOfMaxMin(str) {
  const splitAry = str.split(" ");
  const numAry = [];
  for (let i = 0; i < splitAry.length; i++) {
    let a = parseInt(splitAry[i]);
    numAry.push(a);
  }
  let max = arrayMax(numAry);
  let min = arrayMin(numAry);
  return `Max: ${max}, Min: ${min}, Sum: ${max + min}`;
}

function arrayMax(array) {
  let len = array.length,
    max = -Infinity;
  while (len--) {
    if (array[len] > max) {
      max = array[len];
    }
  }
  return max;
}

function arrayMin(arr) {
  var len = arr.length,
    min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
