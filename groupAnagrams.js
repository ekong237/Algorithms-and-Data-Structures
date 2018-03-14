// https://leetcode.com/problems/group-anagrams/description/

// Given an array of strings, group anagrams together.

// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"], 

//               // iterate over p2 until end of array
//                 // decrement p1
// Return:

// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// N is length of array of strings
// K is longest string length within array (K LOGK)
// Time: N * K log(K)
// Space: N * K

const groupAnagrams = (arrOfStrings) => {
  let result = [];
  let obj = {};
  arrOfStrings.forEach(string => {
    let alphabetizedString = string.split('').sort().join('');
    if (obj[alphabetizedString]) {
      obj[alphabetizedString] = obj[alphabetizedString].concat(string);
    } else {
      obj[alphabetizedString] = [string];
    }
  })
  
  for (let group in obj) {
    result.push(obj[group]);
  }
  return result;
}

let arr = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(arr));
// [ [ 'eat', 'tea', 'ate' ], 
//   [ 'tan', 'nat' ], 
//   [ 'bat' ] ]