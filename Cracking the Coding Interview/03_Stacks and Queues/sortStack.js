// 3.5
// Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, 
// but you may not copy the elements into any other data structure (such as an array). The stack supports the following 
// operations: push, pop, peek, and isEmpty.

class SortStack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    let temp = [];
    let last = this.peek();
    while(last < val) {
      temp.push(this.stack.pop())
      last = this.peek()
    }

    this.stack.push(val);

    while(temp.length > 0) {
      this.stack.push(temp.pop());
    }
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

let sorted = new SortStack();
sorted.push(20)
sorted.push(10)
sorted.push(40)
sorted.push(15)
console.log(sorted);