class Queue {
  constructor() {
    this.queue = new Array();
  }  

  enqueue(val) {
    this.queue.push(val);
  }

  dequeue() {
    return this.queue.shift();
  }
}

let myQ = new Queue();
myQ.enqueue(7);
myQ.enqueue(8);
myQ.dequeue();
myQ.dequeue();
console.log(myQ);