// input str, k num distinct char
// output is str (of shortest substr with 2 distinct char)

// keep track of distinct char
// keep track of char count

// startindex
// endindex

// iterate over our str and inc endindex
  // check if distinct char
    // inc distinct 
  // inc char count

  // while distinct # === k
    // check if longest
      // update longest

    // move startindex foward
    // update distinct char -1
    // update char count

const longestSubstringWithKDistinctChar = (str, k) => {
  let headIndex = 0;
  let longest = '';
  let charCount = {};
  let distinctCount = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (charCount[char] === undefined || charCount[char] === 0) {
      distinctCount++;
      charCount[char] = 1;
    } else {
      charCount[char]++;
    }
    if (distinctCount > k) {
        let temp = str.slice(headIndex, i);
        longest = (temp.length > longest.length) ? temp : longest;
 
      while(distinctCount > k) {
        let headChar = str[headIndex];
        // update count in obj
        // update distinct count
        charCount[headChar]--;
        if (charCount[headChar] === 0) {
          distinctCount--;
        } 
        if(distinctCount === k) {

        }
        headIndex++;
      }
    }
    
  }
  return longest;
}

let str = 'abcbbbbcccbdddadacb';
console.log('result', longestSubstringWithKDistinctChar(str, 2));



