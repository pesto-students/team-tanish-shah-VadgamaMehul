function findLongestConsecutiveSubsequence(input) {
    // Convert input string to an array of integers
    const nums = input.split(" ").map(Number);
  
    // Create a set and add all elements from the array
    const numsSet = new Set(nums);
  
    // Initialize maxLength
    let maxLength = 0;
  
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
  
      // Check if num-1 exists in the numsSet
      if (!numsSet.has(num - 1)) {
        let length = 1;
        let currentNum = num + 1;
  
        // Increment length while consecutive numbers exist in the numsSet
        while (numsSet.has(currentNum)) {
          length++;
          currentNum++;
        }
  
        // Update maxLength
        maxLength = Math.max(maxLength, length);
      }
    }
  
    // Return maxLength
    return maxLength;
  }
  
  // Prompt the user to enter the array elements
  const input = prompt("Enter the array elements separated by spaces:");
  
  // Call the function and display the result
  const result = findLongestConsecutiveSubsequence(input);
  console.log(result);
  