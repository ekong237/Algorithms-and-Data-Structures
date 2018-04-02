// 4.4
// Implement a function to check if a binary tree is balanced. For the purposes of this question, a balanced tree is 
// defined to a be a tree such that the heights of the two subtrees of any node never differ by more than one.

let { BST } = require('./treesAndGraphs');

const checkBalanced = (currNode) => {
  if (currNode.left && !currNode.right) {
    if (currNode.left.left && currNode.left.right) {
      return false;
    }
  }
  if (currNode.right && !currNode.left) {
    if (currNode.right.left && currNode.right.right) {
      return false;
    }
  }
  let isBalanced = true;
  if (currNode.left) {
    isBalanced = checkBalanced(currNode.left);
  }
  if (currNode.right) {
    isBalanced = checkBalanced(currNode.right);
  }
  return isBalanced;
}

let myBST = new BST(7);
myBST.insert(5)
myBST.insert(11)

myBST.insert(2)
myBST.insert(6)
myBST.insert(10)
myBST.insert(13)
console.log(myBST);

checkBalanced()


