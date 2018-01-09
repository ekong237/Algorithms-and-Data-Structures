// A message containing letters from A-Z is being encoded to numbers using the following mapping:
// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26
// Given an encoded message containing digits, determine the total number of ways to decode it.
// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).
// The number of ways decoding "12" is 2.

// input is a string of numbers
// output is number (of ways a message can be decoded)

// what this function does is it counts how many ways a string of numbers can be decoded

// how many groupings of numbers < 26 can you make?

// create a result array

// iterate over string of numbers
  // first iteration, put all possible letters into the array

  // create temp array
  // iterate over result array
    // for each element in result array
    // check adjacent numbers and add them together
    // if number is less than 26
    // push into results

var numDecodings = function(s) {
  if (s.length === 0) return 0;
  if (!Number(s)^0) return 0;
  if (s[0] === '0') return 0;
  if (s.length === 1) return 1;
  
  if (s.length === 2) {
    if(s[s.length-1] === '0') return 1;

    if (Number(s) <= 26) {
      return 2;
    } else {
      return 1;
    } 
  }
  if (s[s.length-1] === '0') return 0;
  let result = [s]
  for (let i = 1; i < s.length; i++) {
    let pLeft = s[i-1];
    let pRight = s[i];
    let combo = Number(pLeft + pRight);

    if (combo === 0 || combo === pLeft || combo === pRight) continue;
    else if (combo <= 26) {
      result.push(combo);
    }
  }
  console.log(result);

  return result.length;
}

console.log('>', numDecodings('117426'));







