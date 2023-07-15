// program to find the HCF or GCD of two integers

let hcf;
// take input
const number1 = prompt("Enter a first positive integer: ");
const number2 = prompt("Enter a second positive integer: ");

//HCF of num1 and num2
function HCM(num1, num2) {
  // looping from 1 to number1 and number2
  let i = 1;
  while (i <= num1 && i <= num2) {
    if (num1 % i == 0 && num2 % i == 0) {
      hcf = i;
    }
    i++;
  }
  return hcf;
}

//LCM of num1 and num2
function LCM(num1, num2) {
  let lcm = (num1 * num2) / HCM(num1, num2);
  return lcm;
}

// display the hcf
alert(`LCM of ${number1} and ${number2} is ${LCM(number1, number2)}.`);
alert(`HCF of ${number1} and ${number2} is ${HCM(number1, number2)}.`);
