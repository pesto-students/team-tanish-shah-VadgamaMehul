function printAllPermutations(str, start, permutations) {
    if (start === str.length - 1) {
      permutations.push(str);
      return;
    }
  
    for (let i = start; i < str.length; i++) {
      // Swap characters at positions start and i
      const arr = str.split('');
      const temp = arr[start];
      arr[start] = arr[i];
      arr[i] = temp;
      const swappedStr = arr.join('');
  
      // Recursive call with the updated string and the incremented starting index
      printAllPermutations(swappedStr, start + 1, permutations);
  
      // Swap back the characters to restore the original order before exploring other possibilities
      arr[start] = arr[i];
      arr[i] = temp;
    }
  }
  
  function getAllPermutations(str) {
    const permutations = [];
    printAllPermutations(str, 0, permutations);
    return permutations;
  }
  
  // Test cases
  const test1Input = "abc";
  const test2Input = "ab";
  
  console.log(getAllPermutations(test1Input).join(' ')); // Output: "abc acb bac bca cab cba"
  console.log(getAllPermutations(test2Input).join(' ')); // Output: "ab ba"
  