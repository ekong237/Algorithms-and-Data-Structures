// 4.2
// Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree 
// with minimal height.

let { BST } = require('./treesAndGraphs');

const minimalTree = (arr) => {
  if (arr.length === 0) {
    return null;
  }

  let middleI = Math.floor((0 + arr.length-1) / 2);
  let root = new BST(arr[middleI]);

  root.left = minimalTree(arr.slice(0, middleI));
  root.right = minimalTree(arr.slice(middleI + 1));

  return root;
}

let arr = [2, 5, 7, 12, 13, 17, 19];
console.log(minimalTree(arr));