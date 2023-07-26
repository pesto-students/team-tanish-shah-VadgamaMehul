function longestPalindromicSubstring(s) {
    // Check for empty or null input string
    if (!s || s.length < 1) return '';
  
    let start = 0; // Variable to store the starting index of the longest palindromic substring
    let maxLength = 0; // Variable to store the length of the longest palindromic substring
  
    // Helper function to expand the palindrome from the center
    function expandFromCenter(left, right) {
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
      }
      return right - left - 1; // Length of the palindromic substring centered at indices left and right
    }
  
    // Iterate through each character in the input string
    for (let i = 0; i < s.length; i++) {
      // Find the length of odd-length palindrome (centered at i)
      const len1 = expandFromCenter(i, i);
      
      // Find the length of even-length palindrome (centered at i and i+1)
      const len2 = expandFromCenter(i, i + 1);
  
      // Get the maximum length between the odd and even-length palindromes
      const len = Math.max(len1, len2);
  
      // If the current palindrome is longer than the previous longest one, update start and maxLength
      if (len > maxLength) {
        maxLength = len;
        start = i - Math.floor((len - 1) / 2);
      }
    }
  
    // Extract and return the longest palindromic substring using start and maxLength
    return s.slice(start, start + maxLength);
  }
  
  // Test cases
  console.log(longestPalindromicSubstring('babad')); // Output: 'bab'
  console.log(longestPalindromicSubstring('cbbd'));  // Output: 'bb'
  