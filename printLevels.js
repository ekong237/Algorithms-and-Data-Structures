class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = this.right = null;
  }
}

const printLevels = (root) => {
  let result = [];
  let queue = [];

  if (!root) {
    return levels;
  } else {
    queue.push(root)
  }
  console.log(queue);

  let curLvlCount = 1;
  let nextLvlCount = 0;
  let temp = [];
    
  while (queue.length) {
    let currentNode = queue.shift();
    console.log('currNode:', currentNode.val, 'curLevel:', curLvlCount);
    console.log('result so far:', result);
    temp.push(currentNode.val);
    console.log('temp:', temp);
    curLvlCount--;

    if (currentNode.left) {
      queue.push(currentNode.left);
      nextLvlCount++;
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
      nextLvlCount++;
    }
    if (curLvlCount === 0) {
      result.push(temp);
      curLvlCount = nextLvlCount;
      nextLvlCount = 0;
      temp = [];
    }
  }
  return result;
}

let myTree = new TreeNode(3);
myTree.left = new TreeNode(9);
myTree.right = new TreeNode(20);
myTree.left.left = new TreeNode(4);
myTree.left.right = new TreeNode(5);
myTree.right.left = new TreeNode(15);
myTree.right.right = new TreeNode(7);
console.log(myTree);
console.log('----');

console.log(printLevels(myTree));


