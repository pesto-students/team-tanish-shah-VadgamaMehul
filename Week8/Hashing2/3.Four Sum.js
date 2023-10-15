function fourSum(nums, target) {
    const result = [];
    const numMap = new Map();
  
    nums.sort((a, b) => a - b);
  
    // Populate the hashmap with the sum of each pair of elements
    for (let i = 0; i < nums.length - 1; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        const sum = nums[i] + nums[j];
        if (numMap.has(sum)) {
          numMap.get(sum).push([i, j]);
        } else {
          numMap.set(sum, [[i, j]]);
        }
      }
    }
  
    for (let i = 0; i < nums.length - 3; i++) {
      if (i > 0 && nums[i] === nums[i - 1]) {
        continue;
      }
  
      for (let j = i + 1; j < nums.length - 2; j++) {
        if (j > i + 1 && nums[j] === nums[j - 1]) {
          continue;
        }
  
        const remaining = target - (nums[i] + nums[j]);
  
        if (numMap.has(remaining)) {
          const pairs = numMap.get(remaining);
  
          for (const pair of pairs) {
            if (pair[0] > j) {
              result.push([nums[i], nums[j], nums[pair[0]], nums[pair[1]]]);
              break;
            }
          }
        }
      }
    }
  
    return result;
  }
  
  // Test Case 1
  const input1 = [1, 0, -1, 0, -2, 2];
  const target1 = 0;
  console.log(fourSum(input1, target1)); // Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]
  
  // Test Case 2
  const input2 = [2, 2, 2, 2, 2];
  const target2 = 8;
  console.log(fourSum(input2, target2)); // Output: [[2, 2, 2, 2]]
  