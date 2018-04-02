// 4.5
// Implement a function to check if a binary tree is a binary search tree.

let { BST } = require('./treesAndGraphs'); 


// do a depth first search and check largest so far to make sure it is in order

const validateBST = (root, largestSoFar) => {
  largestSoFar = largestSoFar || -Infinity;
  let currNode = root;
  let inOrder = true;
  if (currNode.value > largestSoFar) {
    largestSoFar = currNode.value;
    // console.log(currNode.value);
  } else {
    inOrder = false;
  }
  if (currNode.left) {
    inOrder = validateBST(currNode.left, currNode.value)
  }
  if (currNode.right) {
    inOrder = validateBST(currNode.right, currNode.value)
  }
  return inOrder;
}


const validateBST2 = (root) => {
  let largestSoFar = -Infinity;
  let isValid = true;

  const traverse = (currNode) => {
    if (currNode.left) {
      traverse(currNode.left);
    }
    if (currNode.value > largestSoFar) {
      largestSoFar = currNode.value;
    } else {
      isValid = false;
      return;
    }
    if (currNode.right) {
      traverse(currNode.right)
    }
  }
  traverse(root);
  return isValid;
}




let myBST = new BST(11);
myBST.left = new BST(5);
myBST.right = new BST(17);

myBST.left.left = new BST(3);
myBST.left.right = new BST(7);
myBST.right.left = new BST(13);
myBST.right.right = new BST(1);
// console.log(myBST);

console.log(validateBST(myBST));
console.log(validateBST2(myBST));