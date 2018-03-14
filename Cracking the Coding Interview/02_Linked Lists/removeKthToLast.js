// 2.2
// Implement an algorithm to find the kth to last element of a singly linked list

let { LinkedList } = require('./linkedList.js')

const removeKthToLast = (list, k) => {
  let currNode = list.head;
  let p2 = null;
  let p2PrevNode = null;
  let count = 0;

  while(currNode) {
    if (count === k-1) {
      p2 = list.head;
    } else if (count === k) {
      p2PrevNode = list.head;
      
    } 
    if (!currNode.next) { // when curr node reaches last node, p2 is k away from end
      // console.log('>>p2 prev:', p2PrevNode.value);
      // console.log('>p2:', p2.value);
      p2PrevNode.next = p2.next;
    }
    count++;
    currNode = currNode.next;
    p2 = p2 ? p2.next : null;
    p2PrevNode = p2PrevNode ? p2PrevNode.next : null;
  }
  console.log(list.head.next);
  return list;
}

let myList = new LinkedList();
myList.addToTail(1)
myList.addToTail(2)
myList.addToTail(3)
myList.addToTail(4)

// console.log(JSON.stringify(myList));

removeKthToLast(myList, 2)