// 4.3
// Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth 
// (e.g., If you have a tree with depth D, you'll have D linked lists).

let { BST } = require('./treesAndGraphs');

class ListNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

const listOfDepths = (currNode) => {
  let result = [];
  let q = [currNode];
  let currLevel = 1;
  let nextLevel = 0;
  let list = null;

  while (q.length) {
    let curr = q.shift();
    let newNode = new ListNode(curr.value); 
    newNode.next = list; // append list so far to new node
    list = newNode; // list is now new node with rest of the list.   
    currLevel--;

    if (curr.left) {
      q.push(curr.left);
      nextLevel++;
    }
    if (curr.right) {
      q.push(curr.right)
      nextLevel++;
    }
    if (currLevel === 0) {
      result.push(list)
      list = null;
      currLevel = nextLevel;
      nextLevel = 0;
    }
  }
  // console.log(JSON.stringify(result));
  return result;
}

let myBST = new BST(12);
myBST.insert(5)
myBST.insert(17)

myBST.insert(2)
myBST.insert(7)
myBST.insert(13)
myBST.insert(19)

// console.log(myBST);
console.log(listOfDepths(myBST));