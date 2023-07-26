function minWindowSubstring(str1, str2) {
    // Function to check if the window contains all characters from str2
    function containsAllCharacters(windowCounts, targetCounts) {
        for (const [char, count] of Object.entries(targetCounts)) {
            if (!windowCounts[char] || windowCounts[char] < count) {
                return false;
            }
        }
        return true;
    }

    const targetCounts = {}; // Hashmap to store the count of characters in str2
    for (const char of str2) {
        targetCounts[char] = (targetCounts[char] || 0) + 1;
    }

    let left = 0;
    let right = 0;
    let minWindow = '';
    let minLength = Infinity;
    let requiredCount = Object.keys(targetCounts).length;

    const windowCounts = {}; // Hashmap to store the count of characters in the current window

    while (right < str1.length) {
        const char = str1[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;

        if (targetCounts[char] && windowCounts[char] === targetCounts[char]) {
            requiredCount--;
        }

        while (requiredCount === 0) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minWindow = str1.slice(left, right + 1);
            }

            const leftChar = str1[left];
            windowCounts[leftChar]--;

            if (targetCounts[leftChar] && windowCounts[leftChar] < targetCounts[leftChar]) {
                requiredCount++;
            }

            left++;
        }

        right++;
    }

    return minWindow;
}

// Test cases
console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindowSubstring("aaabbbcdd", "abc")); // Output: "abbbc"
