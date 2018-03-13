// There are three types of edits that can be perfomed on strings: 
// - insert a character
// - remove a character
// - replace a character
// Given two strings, write a function to tell if they are one edit (or zero edits) away

// Example
// pale, ple // true
// pales, pale // true
// pale, bale // true
// pale, bake // false


// Space: O(n)
// Time: O(n)
const oneAway = (str1, str2) => {
  let longerStr = (str1.length > str2.length) ? str1 : str2;
  let shorterStr = (str1.length < str2.length) ? str1 : str2;

  let longCount = new Map();
  let shortCount = new Map();

  for (let i = 0; i < longerStr.length; i++) {
    if (!shorterStr[i]) {
      longCount.set(longerStr[i], longCount.get(longerStr[i]) + 1 || 1);
    } else {
      longCount.set(longerStr[i], longCount.get(longerStr[i]) + 1 || 1);
      shortCount.set(shorterStr[i], shortCount.get(shorterStr[i]) + 1 || 1);
    }
  }

  let diff = 0;
  for (let [key, value] of longCount) {
    if (!shortCount.get(key)) diff++;
    else if (value !== shortCount.get(key)) {
      diff += (value - shortCount.get(key));
    }
  }
  return diff <= 1 && diff >= 0;
}
console.log(oneAway('pale', 'pale'));


// Time: O(n)
// Space: O(1)
const oneAway2 = (str1, str2) => {
  let longerStr = (str1.length > str2.length) ? str1 : str2;
  let p1 = 0;
  let p2 = 0;

  if (Math.abs(str1, str2) > 1) {
    return false;
  } 

  let editCount = 0;
  while(p1 < longerStr.length && p2 < longerStr.length) {
    if (str1[p1] !== str2[p2]) {
      if (str1.length > str2.length) {
        editCount++;
        p1++;
      } else {
        editCount++;
        p2++;
      }
    } else {
      p1++;
      p2++;
    }
  }
  return editCount <= 1;
}


console.log(oneAway2('ple', 'pale'));