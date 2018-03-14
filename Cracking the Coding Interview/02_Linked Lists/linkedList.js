// 2.0

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToTail(input) {
    //check if it's a node, if not create a new one
    let newNode = (input.value) ? input : new Node(input);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.tail;
      this.tail = newNode;
      temp.next = newNode;
    }  
      
  }
}

// let myList = new LinkedList();
// myList.addToTail(3)
// myList.addToTail(5)
// myList.addToTail(8)
// console.log(JSON.stringify(myList));

module.exports.LinkedList = LinkedList;
