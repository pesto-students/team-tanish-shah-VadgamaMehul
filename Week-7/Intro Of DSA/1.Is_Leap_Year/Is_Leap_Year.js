function leadpYear(year) {
  // if the year is divided by 4
  if (year % 4 === 0) {
    // if the year is century
    if (year % 100 === 0) {
      // if year is divided by 400
      // then it is a leap year
      if (year % 400 === 0) {
        return ("Yes");
      } else return ("No");
    }
    // if the year is not century
    else return ("Yes");
  } else return ("No");
}

let leapYearVar = prompt('Enter the year:')
let ans = leadpYear(leapYearVar);
alert(ans);

