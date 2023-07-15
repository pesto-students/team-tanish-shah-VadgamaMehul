let str = prompt("Enter Number:");
let num = Number(str);

function reversNum(numb) {
  let revers = 0;
  while (numb > 0) {
    let a = numb % 10;
    revers = revers * 10 + a;
    numb = Math.floor(numb / 10);
  }
  return revers;
}

alert(reversNum(num));