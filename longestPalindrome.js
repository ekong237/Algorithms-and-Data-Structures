// Longest Palindromic Substring

const longestPalindromicSubstring = (str) => {
  let strLength = str.length;
  let longest = '';
  for (let i = 0; i < str.length; i++) {
    let curr;
    if (strLength % 2 === 0 && str[i] === str[i+1]) {
      curr = expandFromCenter(str, i, i+1) ;
      console.log('current even:', curr);
    } else {
      curr = expandFromCenter(str, i, i);
      console.log('current odd:', curr);
    }
    longest = (curr.length > longest.length) ? curr : longest;
  }
  return longest;
}


const expandFromCenter = (str, left, right) => {
    while (left > 0 && right < str.length - 1 && str[left-1] === str[right+1]) {
        left--;
        right++;
    }
    return str.slice(left, right + 1);
}

console.log(expandFromCenter('babad', 2, 2))

// console.log(longestPalindromicSubstring('babad'));