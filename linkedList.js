class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(headValue) {
    this.head = new Node(headValue);
    this.tail = this.head;
  }

  push(val) {
    let newNode = new Node(val);
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }

  pop() {
    let count = 0;
    let currentNode = this.head;
    let prevNode = this.head;
    while(currentNode.next) {
      if (count > 0) {
        prevNode = prevNode.next;
      }
      currentNode = currentNode.next;
      count++;
    }
    
    this.tail = prevNode;
    this.tail.next = null;
    console.log('tail', this.tail);

  }

  removeHead() {
    this.head = this.head.next;
  }

  getHead() {
    return this.head;
  }
}

module.exports.LinkedList = LinkedList;


// let myList = new LinkedList(5);
// myList.push(6);
// myList.push(7);
// myList.push(8);
// myList.pop();
// console.log(myList);
