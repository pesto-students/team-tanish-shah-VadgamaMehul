function intersectionArray(arr1, arr2) {
  //Create a new Set using the elements of one array.
  const setArray = new Set(arr1);
  //Initialize an empty intersection array.
  const intArray = [];

  //Iterate over the elements of the other array. Using for of loop
  // for(let val of arr2){
  //     if(setArray.has(val)){
  //         intArray.push(val);
  //         setArray.delete(val);
  //     }
  // }

  //Iterate over the elements of the other array. Using forEach loop
  arr2.forEach((val) => {
    //For each element, check if it exists in the Set.
    if (setArray.has(val)) {
      // If it does, add it to the intersection array and remove it from the Set.
      intArray.push(val);
      setArray.delete(val);
    }
  });
  //Return the intersection array.
  return intArray;
}

let a1 = [1, 2, 4, 5, 6];
let a2 = [2, 3, 4, 5];

console.log(intersectionArray(a1, a2));
