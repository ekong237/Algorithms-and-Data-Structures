
// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

// For example:

// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

let addDigit = (number) => {
  let sumSoFar = 0;
  let currNum = number;
  let numToLetters = currNum.toString().split('');
  while(numToLetters.length > 1) {
    for (let i = 0; i < numToLetters.length; i++) {
      sumSoFar += Number(numToLetters[i]);
    }
    numToLetters = sumSoFar.toString();
    if (numToLetters.length === 1) {
      break;
    }
    sumSoFar = 0;
  }
  return sumSoFar;
}

console.log(addDigit(38));
