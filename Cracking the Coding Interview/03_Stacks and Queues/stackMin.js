// 3.2
// How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? 
// Push, pop, and min should all operate in O(1) time



class Stack {
  constructor() {
    this.stack = [];
  }

  push(val) {
    // keep track of min so far for each element added
    let min = this.min() || Number.POSITIVE_INFINITY;
    console.log(min);
    this.stack.push({
      value: val,
      min: Math.min(min, val)
    });
  }

  pop() {
    return this.stack.pop();
  }

  min () {
    // last element min
    if (this.stack.length > 0) {
      return this.stack[this.stack.length - 1]['min'];  
    }
    
  }
}

module.exports.Stack = Stack;

// let s = new Stack();
// s.push(6)
// s.push(7)
// s.push(3)
// console.log(s.min());

