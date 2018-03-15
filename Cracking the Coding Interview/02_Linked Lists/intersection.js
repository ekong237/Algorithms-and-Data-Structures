// 2.7
// Given two singly linked lists, determine if the two lists intersect. Return the intersecting node. Note that the 
// intersection is defined based on reference, not value. That is, if the kth node of the first linked list is the 
// exact same node (by reference) as the jth node of the second linked list, then they are interescting. 

let { LinkedList } = require('./linkedList.js');

const intersection = (l1, l2) => {
  l1 = l1.head;
  l2 = l2.head;

  while(l1 && l2) {
    if (l1 === l2) {
      return l1;
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return undefined;
}

let myList2 = new LinkedList();
myList2.addToTail(3)
myList2.addToTail(4)
myList2.addToTail(1)
myList2.addToTail(2)

let myList = new LinkedList();
myList.addToTail('H')
myList.addToTail('I')
myList.addToTail(myList2.head.next.next)

// console.log(myList2.head.next.next);
// console.log(myList.head);
console.log(intersection(myList, myList2));