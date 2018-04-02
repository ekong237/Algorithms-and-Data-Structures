// Longest Palindromic Substring

const longestPalindromicSubstring = (str) => {
  let strLength = str.length;
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    
    // if (strLength % 2 === 0 && str[i] === str[i+1]) {
      let curr1 = expandFromCenter(str, i, i+1) ;
    //   console.log('current even:', curr);
    // // } else {
      let curr2 = expandFromCenter(str, i, i);
      // console.log('current odd:', curr);
    // }
    let longestL = (curr1.length > curr2.length) ? curr1 : curr2;
    longest = (longestL.length > longest.length) ? longestL : longest;
console.log(longestL, longestL.length, longest.length);
  }
  console.log(longest);
  return longest;
}


const expandFromCenter = (str, left, right) => {
    while (left > 0 && right < str.length && str[left-1] === str[right+1]) {
        left--;
        right++;
    }
    return str.slice(left, right + 1);
}

// console.log(expandFromCenter('babad', 2, 2))

console.log(longestPalindromicSubstring('abb'));