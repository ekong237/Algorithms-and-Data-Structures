class Tree{
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let a = new Tree(3);
let b = new Tree(3);
let c = new Tree(3);
let d = new Tree(3);
let e = new Tree(3);
let f = new Tree(3);


a.left = c;
a.right = b;
a.left.left = d;
a.left.left = e;
a.left.left.left = f;
console.log(a);
console.log('----');

//.            3
//         3.        3
//.     3.   3
//.  3
// single outer branch link is larger than inner 



var longestUnivaluePath = function(root) {
    let maxCount = 0;

    let traverse = (currNode) => {
        if (!currNode) return 0;
        let leftCount = 0;
        let rightCount = 0;
        let leftBranch = traverse(currNode.left);
        let rightBranch = traverse(currNode.right);

        if (currNode.left && currNode.val === currNode.left.val) {
            leftCount = leftBranch + 1;
        }
        if (currNode.right && currNode.val === currNode.right.val) {
            rightCount = rightBranch + 1;
        }
        let maxBranch = Math.max(leftCount, rightCount)

        // check if current max run (from elsewhere) is larger than left floor node to right floor node 
        maxCount = Math.max(maxCount, leftCount + rightCount)

        // only return larger branch
        return maxBranch;
    }
    traverse(root)

    console.log('max:', maxCount);
    return maxCount;
};

console.log(longestUnivaluePath(a));




var longestUnivaluePath2 = function(root) {
    let maxCount = 0;

    let traverse = (currNode) => {
        if (!currNode) return 0;
        let leftBranch = traverse(currNode.left);
        let rightBranch = traverse(currNode.right);

        let maxBranch = Math.max(leftBranch, rightBranch) + 1;
        maxCount = Math.max(maxCount, leftBranch + rightBranch)

        // only return larger branch
        return maxBranch;
    }
    traverse(root)

    console.log('max:', maxCount);
    return maxCount;
};
console.log(longestUnivaluePath2(a));








