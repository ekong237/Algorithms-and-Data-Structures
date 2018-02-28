class LinkedList {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

let A = new LinkedList(1);
let B = new LinkedList(2);
let C = new LinkedList(3);
let D = new LinkedList(4);

A.next = B;
B.next = C;
C.next = D;
D.next = B;

console.log(A.next);

const linkedListCycles = (list) => {
  let p1 = list;
  let p2 = list;
  let count = 0;

  while(p1) { 
    if (p1 === p2) return true;
    if (count >= 2) {
      p2 = p2.next;
    }
    p1 = p1.next;
  }
} 

console.log(linkedListCycles(A));
