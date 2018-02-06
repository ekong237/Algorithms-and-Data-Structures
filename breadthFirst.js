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

  breadthFirstSearch(val) {
    let found = null;
    let queue = [this];

    let traverse = (currentNode) => {
      if (currentNode.value === val) {
        found = currentNode;
        console.log(found);
        return;
      } else {
        console.log(currentNode.value);
        if (currentNode.left) {
          queue.push(currentNode.left)
        } 
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
        traverse(queue.shift())
      }
    }
    traverse(queue.shift());
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
console.log(myTree.breadthFirstSearch(12));


