// Implement an algorithm to determine if a string has all unique characters. 
// What if you cannot use additional data strutures? 

// Checking if first character index is same as last character index
// O(n^2) time complexity. We iterate over our string at O(n) time, and indexOf & lastIndex of also happens in O(n) time. Space O(n), if we instead use a for loop and compare char it will be space O(1)
const isUnique = (str) => {
  return str.split('').every(el => str.indexOf(el) == str.lastIndexOf(el));
}
// console.log(isUnique('gcba'));


// Checking using a set. Time O(n) and space O(n)
const isUnique2 = (str) => {
  let memo = new Set();
  for (let i = 0; i < str.length; i++) {
    if (memo.has(str[i])) {
      return false;
    } else {
      memo.add(str[i]);
    }
  }
  return true;
}
// console.log(isUnique2('gcba'));

// Checking after sorting str. Space O(1); Time O(n logn)
const isUnique3 = (str) => {
  // use quicksort to sort str, using arr method for now
  str.split('').sort();

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i+1]) {
      return false;
    }
  }
  return true;
}

console.log(isUnique3('gcbaa'));