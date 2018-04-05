class Tree{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

const maxPathSum = (root) => {
  let max = -Infinity;

  const traverse = (currNode) => {
    if (!currNode) return 0;

    let leftBranch = Math.max(traverse(currNode.left), 0);
    let rightBranch = Math.max(traverse(currNode.right), 0);

    let eitherBranch = Math.max(leftBranch, rightBranch) + currNode.val;
    let bothBranchAndCurrent = leftBranch + rightBranch + currNode.val;
    max = Math.max(max, eitherBranch, bothBranchAndCurrent)

    return eitherBranch;
  }
  traverse(root)
  console.log('max', max );
  return max;
}

let a = new Tree(5);
let b = new Tree(2);
let c = new Tree(7);
let d = new Tree(3);
let e = new Tree(1);
let f = new Tree(4);

a.left = c;
a.right = b;
a.left.left = d;
a.left.right = e;
a.left.left.left = f;

//.            5
//         7.        2
//.     3.   1
//.  4
console.log(a.left);
console.log('----');

maxPathSum(a)




