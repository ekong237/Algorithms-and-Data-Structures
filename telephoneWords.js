// Given a digit string, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

const numToLetters = {
  1: '',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  0: ''
};

const telephoneWords = (num) => {
  let result = [];
  const getLetters = (numLeft, lettersUsed) => {
    if (numLeft.length === 0) {
      result.push(lettersUsed);
    } else {
      let digit = numLeft[0];
      let possibleLetters = numToLetters[digit];

      for (let i = 0; i < possibleLetters.length; i++) {
        getLetters(numLeft.slice(1), lettersUsed + possibleLetters[i]);
      }
    }
  }
  getLetters(num, '');
  return result;
}
console.log(telephoneWords('23'));

const letterCombinations = (numbers) => {
  let numbersArr = numbers.slice().split('');
  let result = [];
  while (numbersArr.length) {
    let digit = numbersArr.shift();
    let letters = numToLetters[digit];

    let temp = [];
    for (let i = 0; i < letters.length; i++) {
      if (result.length < letters.length) {
        temp.push(letters[i]);
      }
      console.log('temp:', temp, 'result:', result);
      for (let j = 0; j < result.length; j++) {
        temp.push(result[j] + letters[i]);
      }
    } 
    [result, temp] = [temp, result];
  }
  return result;
}

console.log(letterCombinations('23'));;

