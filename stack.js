class Stack {
  constructor() {
    this.stack = new Array();
  }

  push(val) {
    this.stack.push(val);
  }

  pop() {
    return this.stack.pop();
  }

}

let myStack = new Stack();
myStack.push(5);
console.log(myStack.pop());
console.log(myStack);


