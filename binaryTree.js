class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  search(val) {
    let found = false;

    let traverse = (currentNode) => {
      if (currentNode.value === val) {
        found = true;
        return;
      }
      if (currentNode.left) {
        traverse(currentNode.left);
      }
      if (currentNode.right) {
        traverse(currentNode.right);
      }
    }
    traverse(this);
    return found;
  }

  insert(value, current) {
    current = current || this;
    let newNode = new BinaryTree(value);

    if (value <= current.value) {
      if (current.left === null) {
        current.left = newNode;
      } else {
        current.left.insert(value, this.left);
      }
    } else if (value > current.value) {
      if (current.right === null) {
        current.right = newNode;
      } else {
        current.right.insert(value, current.right);
      }
    }

  }

  delete(val, currentNode) {
    currentNode = currentNode || this;

    console.log('--');
    console.log('current', currentNode);
    console.log('compare', val, currentNode.value);

    if (!currentNode.left && !currentNode.right) {
      return null;
    }
    
    if (currentNode.value === val) {
      if (!currentNode.left) {
        // if current node has one child, &no left we delete it by returning its right child, to be parents new subtree
        return currentNode.right;
      } else if (!currentNode.right){
        // if current node has one child, &no right we delete it by returning its right child, to be parents new subtree
        return currentNode.left;
      } else {
        // if current node has two children
        // delete current node by calling the lift function, which changes the current node to the value of its succesor node
        // replace currentNode with right node
        currentNode.right = currentNode.lift(currentNode.right, currentNode);
      }
    }  
    if (val < currentNode.value) {
      console.log('going left', currentNode.left);
      currentNode.left = currentNode.delete(val, currentNode.left);
      console.log(currentNode);
      return currentNode;
    } else if (val > currentNode.value) {
      console.log('going right', currentNode.right);
      currentNode.right = currentNode.delete(val, currentNode.right)
      return currentNode;
    }
  }

  lift(currentNode, nodeToDelete) {
    
    if (currentNode.left) {
      // if current node has left, we traverse all the way left
      currentNode.left = currentNode.lift(currentNode.left, nodeToDelete);
      return currentNode;
    } else {
      // if no left child, then current(right) node is successor node, plug value into the node that we deleted
      nodeToDelete.value = currentNode.value;
      return currentNode.right;
    }
  }
}

let btree = new BinaryTree(50);
btree.insert(25);
btree.insert(75);
btree.insert(11);
btree.insert(33);
btree.insert(56);
btree.insert(89);
btree.delete(50);
// console.log('--');
console.log(btree);