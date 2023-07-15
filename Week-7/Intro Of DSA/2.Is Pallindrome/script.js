let str = prompt("Enter Number:");
let num = Number(str);
console.log(typeof num);

function isPallindrome(nums) {
  let revers_num = reversNum(nums);
  if (revers_num === nums) return "Yes Entered Number is a Pallindrome";
  else return "No Entered Number is not a Pallindrome";
}

function reversNum(numb) {
  let revers = 0;
  while (numb > 0) {
    let a = numb % 10;
    revers = revers * 10 + a;
    numb = Math.floor(numb / 10);
  }
  return revers;
}

alert(isPallindrome(num));
