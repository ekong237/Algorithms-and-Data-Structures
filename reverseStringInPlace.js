// Reverse a string in place


// iterate over the string, using two pointers, 
  //and keep swapping letters until middle of string is reached
// iterate over string again, 
  //finding spaces, and reverse each individual word

const swapLetters = (p1, p2, str) => {
  while(p1 < p2) {
    let c1 = str[p1];
    let c2 = str[p2];
    str = str.slice(0, p2) + c1 + str.slice(p2+1);
    str = str.slice(0, p1) + c2 + str.slice(p1+1);
    p1++;
    p2--;    
  }
  return str;
}

const reverseStringInPlace = (str) => {
  var p1 = 0;
  var p2 = str.length - 1;

  str = swapLetters(p1, p2, str);

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (i === str.length - 1) {
      str = swapLetters(p1, i, str);
    } else if (char === ' ') {
      str = swapLetters(p1, i-1, str);
      p1 = i+1;
    }
  }
  return str;
}

var str = 'Hello Liz He';
console.log(reverseStringInPlace(str));

