class Trie {
  constructor() {
    this.isWord = false;
    this.children = {};
  }

  addWord(word) {
    let currentLetter;
    let currentNode = this;
    let i = 0;
    

    while (i < word.length) {
      currentLetter = word[i]
      console.log(i, word.length);
      if (!currentNode.children[currentLetter]) {
        currentNode.children[currentLetter] = new Trie();
      }
      console.log('currentNode', currentNode);
      currentNode = currentNode.children[currentLetter];
      i++;
      
    }

    if (i === word.length) {
      currentNode.isWord = true;
    }
  }

  contains(word) {
    let currentLetter;
    let currentNode = this;
    let i = 0;

    while(i < word.length) {
      currentLetter  = word[i];
      if (currentNode.children[currentLetter]) {
        currentNode = currentNode.children[currentLetter];
        i++;
      }
    }
    if (i === word.length) {
      return currentNode.isWord;
    }
  }
}

let myTrie = new Trie();
myTrie.addWord('dad');

let d = myTrie.children;
let a = d['d'].children;
// let d2 = a.children;
console.log('---');
console.log('d:', d);
console.log('a:', d['d'].children);
console.log('d', a['a'].children);



