class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(val, index) {
    index = index || undefined;

    let newNode = new Node(val);
    
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else if (index){
      let currentNode = this.head;
      let prevNode = this.head;
      let nextNode = currentNode.next;
      let count = 0;
      while(currentNode.next) {
        if (count === index) {
          prevNode.next = newNode;
          newNode.next = nextNode;
          break;
        } else {

          if (count > 0) {
            prevNode = prevNode.next;
          }
          currentNode = currentNode.next;
          count++;
        }
      }
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
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
  }

  removeHead() {
    this.head = this.head.next;
  }

  getHead() {
    return this.head;
  }
}

module.exports.LinkedList = LinkedList;


let myList = new LinkedList();
myList.insert(5);
myList.insert(6);
myList.insert(7);

myList.insert(8, 1)

// myList.insert(8);
// myList.pop();
console.log(myList.head.next);
