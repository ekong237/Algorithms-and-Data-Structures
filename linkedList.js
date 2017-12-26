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

  removeHead() {
    this.head = this.head.next;
  }

  getHead() {
    return this.head;
  }
}

module.exports.LinkedList = LinkedList;