// Given a non-empty string like "Code" return a string like "CCoCodCode".


// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

// input is a string
// output is an appended string of each new letter added on

// iterate over original string
// for each letter add a new letter to result string


const stringSplosion = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    result += string.slice(0,i+1)
  }
  return result;
}

console.log(stringSplosion('Code'));