let arr = ["a", "b", "c", "d", "e", "i", "o", "u", "i", "o", "p"];
// arr = ['a','e','i','o','u','A','E','I','O','U']
let vowl = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

function findSamePairVowlAndConso(arr){

  //Initialize variables maxLen, vowelCount, and consonantCount to 0.
  let maxLen = 0,
    consonantCount = 0,
    vowelCount = 0;
  
  //Initialize an empty hashmap to keep track of the cumulative counts of vowels and consonants encountered.
  const charCheck = new Map();
  charCheck.set(0, -1);
  
  //Iterate through each character in the array.
  for (let i = 0; i < arr.length; i++) {
    //For each character, check if it is a vowel or a consonant.
    //Iterate through the array and update the diff value based on the current element (increment for 1 and decrement for 0).
    if (vowl.includes(arr[i])) {
      vowelCount++;
    } else {
      consonantCount++;
    }
    //If diff is 0, update maxLen to the current index + 1 (since the subarray from index 0 to the current index has an equal number of 0s and 1s).
    let diff = vowelCount - consonantCount;
    if (charCheck.has(diff)) {
      maxLen = Math.max(maxLen, i - charCheck.get(diff));
    }
    //If diff is already present in diffMap, update maxLen to the maximum value between maxLen and the difference in indices between the current index and the index stored in diffMap[diff].
    else {
      charCheck.set(diff, i);
    }
  }
  return maxLen;
}

console.log(findSamePairVowlAndConso(arr));
