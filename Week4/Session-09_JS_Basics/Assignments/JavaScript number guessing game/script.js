// Your solution goes here
let totalGuesses_counter = 1;

//Function defination
function playGuessingGame(numToGuess, totalGuesses) {
  //prompt
  let gussed_num = prompt("Enter Number b/w 1 to 100");
  while (totalGuesses_counter <= totalGuesses) {
    totalGuesses_counter++;
    //For right gussing
    if (gussed_num == numToGuess) {
      break;
    }
    //if we press cancel
    else if (gussed_num == null) {
      return 0;
    }
    //if enter nothing
    else if (gussed_num == "") {
      gussed_num = prompt("Please enter a number.");
      totalGuesses_counter--;
    }
    //if enter smaller num
    else if (gussed_num < numToGuess) {
      gussed_num = prompt("Guess a larger number.");
    }
    //if enter larger num
    else if (gussed_num > numToGuess) {
      gussed_num = prompt("Guess a smaller number.");
    }
    //if enterd num is Not a num
    else if (isNaN(gussed_num)) {
      gussed_num = prompt("Please enter a number not string");
      totalGuesses_counter--;
    }
  }
  return totalGuesses_counter;
}

let totalNumOfguess = playGuessingGame(24, 10);
if (totalGuesses_counter > 10) {
  totalNumOfguess = 0;
}
console.log(totalNumOfguess);
