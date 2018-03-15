// 2.8
// Given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.

let { Node, LinkedList } = require('./linkedList.js');

const loopDetection = (list) => {
  let p1 = list.head;
  let p2 = list.head;
  let count = 0;

  while(p1 && p2) {
    p1 = p1.next.next;
    p2 = p2.next;

    if (!p1.next) {
      return null;
    } 
    if (p1 === p2) {
      break;
    }
  }

  p2 = list.head;
  while(p1 !== p2) {
    p1 = p1.next;
    p2 = p2.next;
  }
  return p1;
}


let myList = new LinkedList();
let a = new Node('A');
let b = new Node('B');
let c = new Node('C');
let d = new Node('D');

myList.addToTail(a)
myList.addToTail(b)
myList.addToTail(c)
myList.addToTail(d)
d.next = b;
// console.log(myList.head.next);
// console.log('tail', myList.tail);

loopDetection(myList)