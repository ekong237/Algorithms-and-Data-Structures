// Implement a document scanning function wordCountEngine, which receives a string document and returns a list of all unique words in it and their number of occurrences, sorted by the number of occurrences in a descending order. If two or more words have the same count, they should be sorted according to their order in the original sentence. Assume that all letters are in english alphabet. You function should be case-insensitive, so for instance, the words “Perfect” and “perfect” should be considered the same word.

// The engine should strip out punctuation (even in the middle of a word) and use whitespaces to separate words.

// Analyze the time and space complexities of your solution. Try to optimize for time while keeping a polynomial space complexity.

// Examples:

// input:  document = "Practice makes perfect. you'll only
//                     get Perfect by practice. just practice!"

// output: [ ["practice", "3"], 
//            ["perfect", "2"],
//            ["makes", "1"],
//            ["youll", "1"], 
//            ["only", "1"], 
//           ["get", "1"], ["by", "1"], ["just", "1"] ]

const wordCountEngine = function(str) {
  str = str.split(' ');
  let count = new Map()
  let countAtIndex = [];

  for (let i = 0; i < str.length; i++) {
    let word = str[i].replace(/\W/g, '').toLowerCase();
    count.set(word, count.get(word) + 1 || 1);
  }

  for (let [key, value] of count) {
    if (!countAtIndex[value]) {
      countAtIndex[value] = [];
    }
    countAtIndex[value].push([key, value])
    
  }

  countAtIndex = countAtIndex.reverse();
  return countAtIndex.reduce((acc, el, i) => acc.concat(el), []);
}

let str = "Practice makes perfect. you'll only get Perfect by practice. just practice!";
console.log(wordCountEngine(str));
