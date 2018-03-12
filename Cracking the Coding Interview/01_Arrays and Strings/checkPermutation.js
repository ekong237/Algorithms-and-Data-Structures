// Given two strings, write a method to decide if one is a permutation of the other.

// Use a map to remember all letter counts of str1
// when we iterate over str2, and leter is not in str1 map, return false
const checkPermutation = (str1, str2) => {
  let memo = new Map();
  for (let i = 0; i < str1.length; i++){
    memo.set(str1[i], memo.get(str1[i] + 1) || 1);
  }
  console.log(memo);
  for (let i = 0; i < str2.length; i++) {
    let count = memo.get(str2[i]);
    if (!count) {
      return false;
    }
    if (count === 1) {
      memo.delete(str2[i])
    } else {
      memo.set(str2[i], count - 1);
    }
  }
  return memo.size === 0;
}

console.log(checkPermutation('ogd', 'dog'));