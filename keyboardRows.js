// Given a List of words, return the words that can be typed using letters of alphabet on only one row's of American keyboard like the image below.

// Example 1:
// Input: ["Hello", "Alaska", "Dad", "Peace"]
// Output: ["Alaska", "Dad"]

// Note:
// You may use one character in the keyboard more than once.
// You may assume the input string will only contain letters of alphabet.

const row1 = 'QWERTYUIOP'.split('').reduce((acc, el) => {
  acc[el] = 1;
  return acc;
},{});
const row2 = 'ASDFGHJKL'.split('').reduce((acc, el) => {
  acc[el] = 2;
  return acc;
},{});
const row3 = 'ZXCVBNM'.split('').reduce((acc, el) => {
  acc[el] = 3;
  return acc;
},{});
let rows = Object.assign(row1, row2, row3);
let rowsPrinted = { 
  Q: 1,
  W: 1,
  E: 1,
  R: 1,
  T: 1,
  Y: 1,
  U: 1,
  I: 1,
  O: 1,
  P: 1,
  A: 2,
  S: 2,
  D: 2,
  F: 2,
  G: 2,
  H: 2,
  J: 2,
  K: 2,
  L: 2,
  Z: 3,
  X: 3,
  C: 3,
  V: 3,
  B: 3,
  N: 3,
  M: 3 
};

const keyboardRows = (array) => {
  let result = [];
  
  array.forEach(word => {
    let temp = [];
    let firstNumber = Number(rowsPrinted[word[0]]);

    let same = word.toUpperCase().split('').reduce((allSameRow, letter, i) => {
      let letterToNum = Number(rowsPrinted[letter])
      // console.log(firstNumber, letterToNum);
      if ((firstNumber ^ letterToNum) !== 0) {
        allSameRow = false;
      }
      return allSameRow;
    }, true);
    
    if (same) {
      result.push(word)
    }
  });
  return result;
}

let input = ["Hello", "Alaska", "Dad", "Peace"];
console.log(keyboardRows(input));

