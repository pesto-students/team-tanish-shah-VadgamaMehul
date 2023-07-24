let arr = [1,2,3,4,5,6]
let target = 5;

function findFirstIndex(arr, target, currentIndex = 0) {
    if (currentIndex === arr.length) {
    // Base case: target not found in the array
    return -1;
    }
    
    if (arr[currentIndex] === target) {
    // Base case: target found, return the current index
    return currentIndex;
    }
    
    // Recursive case: target not found yet, make a recursive call on the remaining subarray
    return findFirstIndex(arr, target, currentIndex + 1);
    }
    
    // Example usage:
    const inputArray = [4, 8, 2, 10, 6, 8];
    const targetValue = 8;
    
    const firstIndex = findFirstIndex(inputArray, targetValue);
    console.log("First index of occurrence:", firstIndex);