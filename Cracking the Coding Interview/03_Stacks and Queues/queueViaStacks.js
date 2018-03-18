// 3.4
// Implement a MyQueue class which implements a queue using two stacks.

class MyQueue {
  constructor() {
    this.stackIn = [];
    this.stackOut = [];
  }

  enqueue(val) {
    this.stackIn.push(val);
  }

  dequeue() {
    if (this.stackOut.length === 0) {
      while(this.stackIn.length > 0) {
        this.stackOut.push(this.stackIn.pop())
      }
      
    }
    return this.stackOut.pop();
  }
}


let myQ = new MyQueue();
myQ.enqueue(1);
myQ.enqueue(2);
myQ.enqueue(3);
console.log(myQ.dequeue());
console.log(myQ.dequeue());
console.log('in', myQ.stackIn);
console.log('out', myQ.stackOut);