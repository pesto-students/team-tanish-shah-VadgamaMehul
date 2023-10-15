function powerSet(input) {
    // Convert the input string into an array of integers
    const nums = input.split(' ').map(Number);
  
    // Function to generate subsets using recursion
    function generateSubsets(index, currentSubset, powerSet) {
      // Base case: If the index is equal to the length of the array, add the currentSubset to the powerSet
      if (index === nums.length) {
        powerSet.push(currentSubset.slice());
        return;
      }
  
      // Recursive call without including the current element
      generateSubsets(index + 1, currentSubset, powerSet);
  
      // Recursive call including the current element
      currentSubset.push(nums[index]);
      generateSubsets(index + 1, currentSubset, powerSet);
  
      // Backtrack to remove the current element and explore other possibilities
      currentSubset.pop();
    }
  
    // Initialize the powerSet array
    const powerSet = [];
  
    // Start generating subsets from index 0 and an empty currentSubset
    generateSubsets(0, [], powerSet);
  
    return powerSet;
  }
  
  // Test cases
  const test1Input = "1 2 3";
  const test2Input = "4 7 1 9";
  
  console.log(powerSet(test1Input));
  console.log(powerSet(test2Input));
  