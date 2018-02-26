// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

class LinkedList {
  constructor(val){
    this.value = val;
    this.next = null;
  } 
}

let myList = new LinkedList(5);
myList.next = new LinkedList(7);
myList.next.next = new LinkedList(11);

let myList2 = new LinkedList(3);
myList2.next = new LinkedList(5);
myList2.next.next = new LinkedList(8);

let myList3 = new LinkedList(4);
myList3.next = new LinkedList(5);
myList3.next.next = new LinkedList(7);

console.log('1>', myList);
console.log('2>', myList2);
console.log('3>', myList3);
console.log('----');

const mergeKSortedList = (arrOfList) => {
  let nodeVals = [];
  let newList = new LinkedList(0);

  while (arrOfList.length) {
    let list1 = arrOfList.shift();
    while (list1) {
      nodeVals.push(list1.value);
      list1 = list1.next;
    }
  }
  let sorted = nodeVals.sort((a,b) => a-b);
  console.log(nodeVals);

  let currNode = newList;
  while(sorted.length) {
    let newNode = new LinkedList(sorted.shift());
    console.log('prev and new:', currNode.value, newNode.value);
    if (currNode.value === newNode.value) {
      continue;
    }
    currNode.next = newNode;
    currNode = currNode.next;
  }
  return newList;
}

let arrayOfList = [myList, myList2, myList3]
mergeKSortedList(arrayOfList); // 3 -> 4 -> 5 -> 7-> 8 -> 11
