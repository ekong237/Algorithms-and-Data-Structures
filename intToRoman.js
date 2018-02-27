// Given an integer, write a function to return its roman numeral representation.

// eg.
// integerToRoman(1)  = "I"
// integerToRoman(4)  = "IV"
// integerToRoman(49) = "XLIX"


const romanVals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romanLetters = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];




const integerToRoman = (int) => {
  let str = int.toString();
  let result = '';

  let i = 0;
  while(int > 0) { 
    //greedily append largest numeral until int is zero
    if (int - romanVals[i] >= 0) {
      int -= romanVals[i];
      result += romanLetters[i];
    } else {
      i++;
    }
  }
  return result;
} 

console.log(integerToRoman(49));