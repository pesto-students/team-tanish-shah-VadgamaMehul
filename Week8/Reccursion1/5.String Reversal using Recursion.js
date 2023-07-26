function reverseString(str) {
    // Base case: If the string is empty or has only one character, return the string itself
    if (str.length <= 1) {
      return str;
    }
  
    // Recursive call: Concatenate the first character with the reversed substring
    return str.charAt(str.length - 1) + reverseString(str.slice(0, str.length - 1));
  }
  
  // Test cases
  const test1Input = "hello";
  const test2Input = "racecar";
  
  console.log(reverseString(test1Input)); // Output: "olleh"
  console.log(reverseString(test2Input)); // Output: "racecar"
  