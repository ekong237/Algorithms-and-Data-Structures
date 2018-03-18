// 3.3
// Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely 
// start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. 
// SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. 
// SetOfStacks.push() and SetOfStacks.pop() should behave identically to a single stack (that is, pop() should return the 
// same values as it would if there were just a single stack). 

// FOLLOW UP
// Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

class SetOfStacks {
  constructor(capacity = 3) {
    this.stacks = [];
    this.capacity = capacity;
  }

  push(val) {
    let last = this.last();
    if (this.stacks.length === 0 || last.length === this.capacity) {
      this.stacks.push([val]);
    } else {
      last.push(val);
    }
  }

  pop(arr) {
    let last = arr || this.last();
    let lastEl = last.pop();
    if (last.length === 0) {
      this.stacks.splice(this.stacks.length - 1, 1);
    } 
    return lastEl;
  }

  last() {
    if (this.stacks.length > 0) {
      return this.stacks[this.stacks.length - 1];
    }
    return [];
  }

  popAt(index) {
    return this.pop(this.stacks[index]);
  }
}

let plates = new SetOfStacks();
plates.push(1)
plates.push(2)
plates.push(3)
plates.push(6)
plates.push(7)
plates.push(8)
console.log(plates);

// console.log(plates.pop());
console.log(plates.popAt(0));
console.log(plates);