// 2.3
// Implement an algorithm to delete a node in the middle (i.e., any node but the first and last node, 
// not necessarily the exact middle) of a singly linked list, given only access to that node

let { LinkedList } = require('./linkedList');

// const removeMiddleNode = (list) => {
//   let p1PrevNode = null;
//   let p1 = null;
//   let p2 = list.head;
//   let count = 0;
//   let halfCount = 0;

//   while (p2) {
//     count++;
//     if (!p2.next) {
//       halfCount = Math.floor(count/2);
//     }
//     p2 = p2.next;
//   }

//   count = 0;
//   p2 = list.head;
//   while(p2) {
//     if (count === halfCount+1) {
//       p1PrevNode = list.head;
//     } else if (count === halfCount) {
//       p1 = list.head;
//     }
//     if (!p2.next) {
//       p1PrevNode.next = p1.next;

//     }
//     count++;
//     p2 = p2.next;
//     p1 = p1 ? p1.next : null;
//     p1PrevNode = p1PrevNode ? p1PrevNode.next : null;
//   }
//   return list;
// }

let myList = new LinkedList();
myList.addToTail(1)
myList.addToTail(2)
myList.addToTail(3)
myList.addToTail(4)
myList.addToTail(5)
myList.addToTail(6)
console.log(myList.head.next.next);
// console.log(removeMiddleNode(myList));

const removeMiddleNode2 = (node) => {
  if (!node || !node.next) {
    throw new Error('Invalid Node');
  }
  // set current value to next node
  node.value = node.next.value;
  // set next node to skip over node val you copied
  node.next = node.next.next;
}
console.log(removeMiddleNode2(myList.head.next.next));
console.log('after', myList.head.next);
