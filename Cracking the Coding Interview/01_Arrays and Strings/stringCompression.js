// 1.6
// Implement a method to perform basic string compression using the counts of repeated characters. For example, the string
// aabcccccaaa would become a2b1c5a3. If the 'compressed' string would not become smaller than the original string, your 
// method should return the original string. You can assume the string has only uppercase and lowercase letters(a - z).

//.   aabcccccaaa
//.p1   ^  
//.p2    ^
const stringCompression = (str) => {
  let p1 = 0;
  let p2 = 0;
  let result = '';
  let count = 0;

  while(p1 <= str.length && p2 <= str.length) {
    let lastChar = str[p2 - 1];

    while(str[p1] !== str[p2]) {
      count++;
      p1++;
      if (p1 === p2) {
        result += lastChar + count;
        count = 0;
      }   
    }
    p2++;
  }
  return result;
}

console.log(stringCompression('aabcccccaaa'));
console.log(stringCompression('aabbcc'));
