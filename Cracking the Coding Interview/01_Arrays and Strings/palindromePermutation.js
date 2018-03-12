// 1.4
// Given a string, write a function to check if it is a permutation of a palindrome. 
// A palindrome is a word or phrase that is the same forwards and backwards. A 
// permutation is a rearrangement of letters. The palindrome does not need to be 
// limited to just dictionary words.

// Input: Tact Coa
// Output: true (permutations: 'taco cat', 'atco cta', etc.)

// Time: O(n)
// Space: O(n)
const palindromePermutation = (str) => {
  let count = new Map();
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === " ") continue;
    count.set(char, count.get(char) + 1 || 1);
  }

  let oddCount = 0;
  for (let [key, value] of count) {
    if (value % 2 !== 0) {
      oddCount++;
    }
    if (oddCount > 1) {
      return false;
    }
  }
  return true;
} 

console.log(palindromePermutation('taco cat'));