// 1.3
// Write a method to replace all spaces in a string with '%20.' 
// You may assume that the string has sufficient space at the end to hold 
// the adiditional characters, and that you are given the 'true' length of the string.

const URLify = (str) => {
  return str.trim().replace(/\W/g, "%20"); //replace white space char with '%20'
}
// console.log(URLify('Mr John Smith   '));

// Space: O(n)
// Time: O(n)
const URLify2 = (str) => {
  return str.trim().split('').reduce((acc, el, i) => {
    return (el === ' ') ? acc.concat('%20') : acc.concat(el);
  }, []).join('');
}
console.log(URLify2('Mr John Smith   '));