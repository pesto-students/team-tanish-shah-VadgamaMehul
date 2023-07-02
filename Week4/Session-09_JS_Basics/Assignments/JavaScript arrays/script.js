// Put your solution here
let num = [2, 4, 6, 7, 8];

//initialize variables
let even = [];
let odd = [];
//define function
function DivideArray(num) {
  for (let i = 0; i < num.length; i++) {
    //main logic
    if (num[i] % 2 == 0) {
      even.push(num[i]);
    } else {
      odd.push(num[i]);
    }
  }
}

//funtion call
DivideArray(num);

//for proper reverse num
even.sort((a, b) => a - b);
odd.sort((a, b) => a - b);

//for even output
console.log("Even Number :");
if (even.length === 0) {
  console.log("None");
} else {
  for (let i = 0; i < even.length; i++) {
    console.log(even[i]);
  }
}
console.log(" ");

//for odd output
console.log("Odd Number :");
if (odd.length === 0) {
  console.log("None");
} else {
  for (let i = 0; i < odd.length; i++) {
    console.log(odd[i]);
  }
}