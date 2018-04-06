// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.



// For example, you may serialize the following tree

//     1
//    / \
//   2   3
//      / \
//     4   5
// as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

class BT {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let tree = new BT(1);
tree.left = new BT(2);
tree.right = new BT(3);
tree.right.left = new BT(4);
tree.right.right = new BT(5);
tree.right.right.right = new BT(6);


const serialize = (root) => {
  let result = [];
  let q = [root];

  while(q.length) {
    let curr = q.shift();
    if (curr === null) {
      result.push(null);
      continue;
    } else {
      result.push(curr.val);      
    }
    let left = (curr.left) ? curr.left : null;
    q.push(left);

    let right = (curr.right) ? curr.right : null;
    q.push(right);
  }

  for (let i = result.length-1; i >= 0; i--) {
    if (result[i] === null) {
      result.pop()
    } else {
      break;
    }
  }
  return result;
}

// console.log(tree);
console.log(serialize(tree));



