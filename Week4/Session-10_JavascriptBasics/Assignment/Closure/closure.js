function counter() {
    let count = 0;
    function cont() {
      count++;
      return count;
    }
    return cont;
  }
  
  let firstCounter = counter();
  let secondCounter = counter();
  
  let first_arry = [];
  for (let i = 0; i < 5; i++) {
    first_arry.push(firstCounter());
  }
  let second_arry = [];
  for (let i = 0; i < 3; i++) {
    second_arry.push(secondCounter());
  }
  
  console.log("First array : " + first_arry);
  console.log("Second array : " + second_arry);