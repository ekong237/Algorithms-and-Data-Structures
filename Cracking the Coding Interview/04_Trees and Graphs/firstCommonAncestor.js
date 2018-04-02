// 4.8
// Design an algorithm and write code to find the first common ancestor of two nodes in a binary tree. Avoid storing 
// additional nodes in a data structure. NOTE: This is not necessarily a binary search tree.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }

  isAncestor(node2) {
    if (this === node2) {
      return true;
    } else {
      let searchLeft = false;
      let searchRight = false;

      if (this.left) {
        searchLeft = this.left.isAncestor(node2);
      }
      if (this.right) {
        searchRight = this.right.isAncestor(node2);
      }
      return searchLeft || searchRight;
    }
  }
}

const firstCommonAncestor = (node1, node2) => {
  let currNode = node1;
  // console.log(currNode);
  while(!currNode.isAncestor(node2)) {
    // while node1 is not an ancestor of node2, keep moving up
    if (currNode === null) {
      throw Error;
    } else {
      currNode = currNode.parent;
    }
  }
  return currNode.value;
}

let a = new BinaryTree('a');
let b = new BinaryTree('b');
let c = new BinaryTree('c');

let d = new BinaryTree('d');
let e = new BinaryTree('e');
let f = new BinaryTree('f');
let g = new BinaryTree('g');
let h = new BinaryTree('h');

a.left = b; b.parent = a;
a.right = c; c.parent = a;
b.left = d; d.parent = b;
b.right = e; e.parent = b;
d.left = f; f.parent = d;
e.left = g; g.parent = e;
e.right = h; h.parent = e;
// console.log(a.left);

// console.log(a.isAncestor(d));
console.log(firstCommonAncestor(f, h));
