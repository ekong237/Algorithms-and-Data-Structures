class BinaryTree {
  constructor(val) {
    this.value = val;
    this.left = this.right = null;
  }

  insert(val) {
    let newNode = new BinaryTree(val);

    let traverse = (currentNode) => {
      if (val > currentNode.value) {
        if (currentNode.right === null) {
          currentNode.right = newNode;
        } else {
          traverse(currentNode.right);
        }
      } else if (val < currentNode.value) {
        if (currentNode.left === null) {
          currentNode.left = newNode;
        } else {
          traverse(currentNode.left);
        }
      }
    }
    traverse(this);
  }

  depthFirstSearch(val) {
    let found = null;

    let traverse = (currentNode) => {
      if (currentNode.value === val) {
        found = currentNode;
        console.log(found);
        return;
      } else {
        console.log(currentNode.value);
        if (currentNode.left) {
          traverse(currentNode.left)
        } 
        // console.log(currentNode.value);
        if (currentNode.right) {
          traverse(currentNode.right);
        }
        // console.log(currentNode.value);
      }
    }
    traverse(this);
    return found;
  }
  
}

let myTree = new BinaryTree(7);
myTree.insert(5)
myTree.insert(10)
myTree.insert(2)
myTree.insert(6)
myTree.insert(8)
myTree.insert(12)
console.log(myTree);
console.log(myTree.depthFirstSearch(12));


