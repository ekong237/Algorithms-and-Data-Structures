// 2.6
// Implement a function to check if a linked list is a palindrome

let { LinkedList } = require('./linkedList');

const palindromeLL = (list) => {
  currNode = list.head;
  let chars = [];

  while (currNode) {
    chars.push(currNode.value)
    currNode = currNode.next;
  }
  return chars.join('') === chars.reverse().join('');
}

let myList = new LinkedList();
myList.addToTail('a')
myList.addToTail('b')
myList.addToTail('a')

console.log(palindromeLL(myList));