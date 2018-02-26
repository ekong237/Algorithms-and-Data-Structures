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

console.log('1>', myList);
console.log('2>', myList2);
console.log('----');

const merge2SortedList = (list1, list2) => {
  let newList = new LinkedList(0);
  let currentNode = newList;

  while(list1.next && list2.next) {
    if (list1.value === list2.value) {
      currentNode.next = list1;
      list1 = list1.next;
      list2 = list2.next;
    } else if (list1.value < list2.value) {
      currentNode.next = list1;
      list1 = list1.next;
    } else {
      currentNode.next = list2;
      list2 = list2.next;
    }
    currentNode = currentNode.next;
  }
  if (list1.next) {
    currentNode.next = list1;
  }
  if (list2.next) {
    currentNode.next = list2;
  }
  return newList.next;
}

console.log(merge2SortedList(myList, myList2));


