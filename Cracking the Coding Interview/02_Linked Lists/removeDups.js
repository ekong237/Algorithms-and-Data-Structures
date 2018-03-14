// 2.1

let { LinkedList } = require ('./linkedList.js');

// k amount of nodes in list
// map can be k long, if none are duplicates

// Time = O(N)
// Space = O(2N) -> O(N)
const removeDups = (list) => {
  let nodes = new Set();
  let currNode = list.head;
  let result = new LinkedList();

  while(currNode) {
    nodes.add(currNode.value);
    currNode = currNode.next;
  }

  for (let val of nodes) {
    result.addToTail(val);    
  }
  return result;
}


// by skipping nodes
const removeDups2 = (list) => {
  let currNode = list.head;
  let nodes = new Set();

  nodes.add(currNode.value)
  while(currNode.next) {
    if (nodes.has(currNode.next.value)) {
      currNode.next = currNode.next.next;
    } else {
      nodes.add(currNode.next.value);
      currNode = currNode.next;
    }
  }
  console.log(nodes);
  return list;
}

let myList = new LinkedList();
myList.addToTail(3)
myList.addToTail(5)
myList.addToTail(2)
myList.addToTail(5)
myList.addToTail(2)
myList.addToTail(5)
// console.log(JSON.stringify(myList));
// console.log('final', JSON.stringify(removeDups(myList)));
console.log('final', JSON.stringify(removeDups2(myList)));