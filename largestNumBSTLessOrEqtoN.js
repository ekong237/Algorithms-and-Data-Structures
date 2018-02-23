// We have a binary search tree and a number N. Our task is to find the greatest number in the binary search tree that is less than or equal to N. 
// Print the value of the element if it exists otherwise print -1.

// Input : N = 24
// Output :result = 21
// (searching for 24 will be like-5->12->21)

// Input  : N = 4
// Output : result = 3
// (searching for 4 will be like-5->2->3

class BST {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}
let myTree = new BST(15);
myTree.left = new BST(7);
myTree.right = new BST(19);

myTree.left.left = new BST(2);
myTree.left.right = new BST(10);

myTree.left.right.left = new BST(8);
myTree.left.right.right = new BST(11);
console.log('Node7:', myTree.left);


const largestNumBSTLessOrEqualToN = (tree, n) => {
  const traverse = (currentNode) => {
    console.log(currentNode.value);
    if (!currentNode.left && !currentNode.right) {
      return currentNode.value;
    }
    if (currentNode.value === n) {
      return n;
    } else if (currentNode.value > n) { 
      // traverse left
      traverse(currentNode.left);
    } else { // node val < n
      // keep traversing right
      traverse(currentNode.right);
    }
  }
  traverse(tree);
}

largestNumBSTLessOrEqualToN(myTree, 12)



