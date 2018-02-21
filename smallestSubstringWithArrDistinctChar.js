// input is array of unique char, string
// the shortest substring (using all the unique char from array)

// return empty string if substring doesn't exist (using all unique char from array)

// xyyz
// zyx
// xyyzyzyx

// keep track of count

// head index and tail index
// increase tail index until substring has every char in arr

// only while we have every char in arr, a valid substring
// we increase head index

// also check if current valid substr is shorter than prev one

function getShortestUniqueSubstring(arr, str) {
  let shortest = '';
  let headIndex = 0;
  let count = {};
  let uniqueCounter = 0;
  
  arr.forEach(char => count[char] = 0);
  
  for (let tailIndex = 0; tailIndex < str.length; tailIndex++) {
    let tailChar = str[tailIndex];
    
    if (count[tailChar] === undefined) {
      continue;
    }
    
    if (count[tailChar] === 0 ) {
      uniqueCounter++;
    }
    count[tailChar]++;

    while(uniqueCounter === arr.length) {
      let tempLength = tailIndex - headIndex + 1;
      if (tempLength === arr.length) {
        return str.slice(headIndex, tailIndex + 1)
      }
      
      if (shortest === ''|| tempLength < shortest.length) {
        shortest = str.slice(headIndex, tailIndex + 1)
        console.log(shortest)
      }
      
      let headChar = str[headIndex];
      // update count in obj
      // update distinct count
      count[headChar]--;
      if (count[headChar] === 0) {
       uniqueCounter--;
      }
      headIndex++;
    }
  }
  return shortest;
}
let arr = ['x','y','z'];
let str = "xyyazyzyxyy"
console.log(getShortestUniqueSubstring(arr, str))