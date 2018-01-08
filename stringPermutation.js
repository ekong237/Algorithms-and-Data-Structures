
const stringPermutation = (str) => {
  let result = [];
  let permute = (strLeft, strSoFar) => {
    if (strLeft.length === 0) {
      if (!result.includes(strSoFar)) {
        result.push(strSoFar);
      }
      return;
    } else {
      for (let i = 0; i < strLeft.length; i++) {
        let currentChar = strLeft.charAt(i);
        permute(strLeft.slice(0, i) + strLeft.slice(i+1), strSoFar + currentChar);
      }
    }
  }
  permute(str, '')
  console.log(result);
  return result.length;
}

console.log(stringPermutation('apple'));
















































