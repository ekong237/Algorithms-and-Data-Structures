// 2.4
// Write code to partition a linked list around a value x, such that all nodes less than x come 
// before all nodes greater than or equal to x. If x is contained within the list, the values of x 
// only need to be after the elements less than x (see below). The partition element x can appear 
// anywhere in the 'right partition'; it does not need to appear between the left and right partitions.

// Input: 3 -> 5 -> 8 -> 5 -> 2 -> 1, partition 5
// Output: 3 -> 1 -> 2 -> 5 -> 5 -> 8

let { LinkedList } = require('./linkedList');

const partitionLL = (list, partition) => {
  let currNode = list.head;
  let leftPart = new LinkedList();
  let rightPart = new LinkedList();
  while (currNode) {
    if (currNode.value < partition) {
      leftPart.addToTail(currNode.value);
    } else {
      rightPart.addToTail(currNode.value);
    }
    currNode = currNode.next;
  }
  // console.log('left<:',leftPart);
  // console.log('right>:',rightPart.head);

  leftPart.addToTail(rightPart.head);
  return leftPart;
}

let myList = new LinkedList();
myList.addToTail(3)
myList.addToTail(5)
myList.addToTail(8)
myList.addToTail(5)
myList.addToTail(2)
console.log(partitionLL(myList, 5));