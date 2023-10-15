function findFirstNonRepeatingCharacter(str) {
    // Create an empty hash table to store character frequencies
    const charFrequency = {};
  
    // Iterate through the string and update the frequency count of each character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charFrequency[char] = (charFrequency[char] || 0) + 1;
    }
  
    // Iterate through the string again and find the first character with a frequency of 1
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charFrequency[char] === 1) {
        return char; // Found the first non-repeating character
      }
    }
  
    return "No non-repeating characters found";
  }
  
  // Prompt the user to enter a string
//   const userInput = prompt("Enter a string:");
  const userInput = "abcdabcde"
  const result = findFirstNonRepeatingCharacter(userInput);
  
  // Display the result
  console.log("Result:", result);
  