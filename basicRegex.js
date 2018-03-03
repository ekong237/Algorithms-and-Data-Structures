// Implement a regular expression function isMatch that supports the '.' and '*' symbols. The function receives two strings - text and pattern - and should return true if the text matches the pattern as a regular expression. For simplicity, assume that the actual symbols '.' and '*' do not appear in the text string and are used as special symbols only in the pattern string.

// In case you aren’t familiar with regular expressions, the function determines if the text and pattern are the equal, where the '.' is treated as a single a character wildcard (see third example), and '*' is matched for a zero or more sequence of the previous letter (see fourth and fifth examples). For more information on regular expression matching, see the Regular Expression Wikipedia page.

// Examples:
// input:  text = "aa", pattern = "a"
// output: false

// input:  text = "aa", pattern = "aa"
// output: true

// input:  text = "abc", pattern = "a.c"
// output: true

// input:  text = "abbb", pattern = "ab*"
// output: true

// input:  text = "acd", pattern = "ab*c."
// output: true

// aaac a*c
// ccc bc*

  // if char after 1st is *
    // if first char not same
    // increment patternP

    // if first char is same
    // increment textP until character change
    // decrease patternLeft


const basicRegex = (text, pattern) => {
  let truthy = true;
  const recurse = (textLeft, patternLeft) => {
    console.log(textLeft, patternLeft);
    if (textLeft.length === 0) return;
    if (patternLeft[1] === "*") { // next char is star
      if (textLeft[0] === patternLeft[0] || patternLeft[0] === '.') { // if first char same
        let currChar = textLeft[0];
        while(currChar === textLeft[0]) {
          textLeft = textLeft.slice(1);
        }
      } 
      recurse(textLeft, patternLeft.slice(2));      
    } else { // next char is not star
      if (textLeft[0] === patternLeft[0] || patternLeft[0] === '.') { // if first char same
        recurse(textLeft.slice(1), textLeft.slice(1));
      } else {
        truthy = false;
        return;
      }      
    } 
  }
  recurse(text, pattern)
  return truthy;  
}

let text = "aaaab";
let pattern = "a*b*";
console.log(basicRegex(text, pattern));

