// Given a string S and a set of words D, find the longest word in D that is a subsequence of S.

// Word W is a subsequence of S if some number of characters, possibly zero, can be deleted from S to form W, without reordering the remaining characters.

// Note: D can appear in any format (list, hash table, prefix tree, etc.

// For example, given the input of S = "abppplee" and D = {"able", "ale", "apple", "bale", "kangaroo"} the correct output would be "apple"

// The words "able" and "ale" are both subsequences of S, but they are shorter than "apple".
// The word "bale" is not a subsequence of S because even though S has all the right letters, they are not in the right order.
// The word "kangaroo" is the longest word in D, but it isn't a subsequence of S


// input is a string and a dictionary as an array
// output string of the longest substring from dictionary

// create wordsInString array
// iterate over each word our dictionary
  // check if the word is contained inside the string in the same order
  // iterate over given string
    //compare string index to dictionaryWord index
    // if index char does not match, dont increment index of word

    // if reached end of string, not a subsequence
    // if reached end of dictionary word, is a subsequence


const stringSubsequence = (string, dictionary) => {
  let wordsFound = {};
  dictionary = dictionary.sort((a,b) => (b.length > a.length) ? 1 : -1);
  console.log(dictionary);
  for (let i = 0; i < dictionary.length; i++) {
    let dictWord = dictionary[i];
    let wordIndex = 0;
    for (let j = string.indexOf(dictWord[0]); j < string.length; j++) {
      // console.log(string[j], dictWord[wordIndex], wordIndex, dictWord.length - 1);
      if (string[j] === dictWord[wordIndex] && wordIndex <= dictWord.length - 1) {
        wordIndex++;
      }
      if (wordIndex === dictWord.length - 1 && !wordsFound[dictWord]) {
        // wordsFound[dictWord] = dictWord.length;
        return dictWord;
      } else if (j === string.length - 1) {
        break;
      }
    }
  }
}

let S = "abppplee";
let D = [ "ale", "able", "apple", "bale", "kangaroo"]; //"ale", "apple", "bale", "kangaroo"
console.log(stringSubsequence(S, D));

// check each dictionary word using greedy approach
// Time Complexity: O(N x W)
// N = D.length
// W = S.length
// optimal if dictionary words are close to string length, 
// otherwise far from optimal if S is very long and dict words are very short

// the greedy algorithm is slow precisely because it naively scans for the dictionary letter index.
// to improve this, we can iterate over our dictionary word
// and map each letter to the index of the letter
// S == "abppplee"

// a -> [0]
// b -> [1]
// p -> [2, 3, 4]
// l -> [5]
// e -> [6, 7]

// for every dictionary word
// do a binary search per dictionary letter
// Time Complexity: O(N + (W * logN) )

