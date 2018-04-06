// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

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
// [ 1, 2, 3, null, null, 4, 5, null, null, null, 6 ]

const deserialize = (arr) => {
  let root = new BT(arr[0]);
  let q = [root];

  for(let i = 1; i < arr.length; i+=2) {
    let current = q.shift();

    if (arr[i] !== null) {
      current.left = new BT(arr[i])
      q.push(current.left);
    }
    if (arr[i+1] !== null && arr[i+1] !== undefined) {
      current.right = new BT(arr[i+1]);
      q.push(current.right);
    }
  }
  return root;
}
//.           1  2.  3.  4.    5   6  7    8.    9.   10   11
deserialize([ 1, 2, 3, null, null, 4, 5, null, null, null, 6 ])



