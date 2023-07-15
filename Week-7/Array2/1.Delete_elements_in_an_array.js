const arry = [9, 12, 15, 18, 21];

function deletElement(arr) {
  if (arr % 2 === 0 && arr % 3 === 0) return false;
  else return true;
}

let filterdElement = arry.filter(deletElement);
console.log(filterdElement);
