// 2.5
// You have two numbers represented by a linked list, where each node contains a single digit. The digits are sorted 
// in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers 
// and returns the sum as a linked list.

// Example

// Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). 617 + 295
// Output: (2 -> 1 -> 9). 912

// Follow up: 
// Suppose the digits are stored in forward order. Repeat the above problem.

// Example: 
// Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). 617 + 295
// Output: (9 -> 1 -> 2). 912

let { LinkedList } = require ('./linkedList.js');

const sumLists = (l1, l2) => {
  l1 = l1.head;
  l2 = l2.head;

  let result = new LinkedList();
  let carry = 0;

  while (l1 && l2) {
    let sum = l1.value + l2.value + carry;
    carry = 0;

    if (sum >= 10) {
      carry = 1; // largest number carry can be is 1, 9+9 = 18
      result.addToTail(sum-10)
    } else {
      result.addToTail(sum);
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  return result;
}


let myList = new LinkedList();
myList.addToTail(6)
myList.addToTail(1)
myList.addToTail(7)

let myList2 = new LinkedList();
myList2.addToTail(2)
myList2.addToTail(9)
myList2.addToTail(5)

// console.log(sumLists(myList, myList2));
// LinkedList {
//   head: Node { value: 2, next: Node { value: 1, next: [Object] } },
//   tail: Node { value: 9, next: null } }


