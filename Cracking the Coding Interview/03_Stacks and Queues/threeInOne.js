// Describe how you could use a single array to implement three stacks.

// split the stack into thirds
// keep shifting elements to utilize all space

/* Hints:
- A stack is simply a data structure in which the most recently added elements are removed first. Can you simulate 
a single stack using an array? Remember that there are many possible solutions, and there are tradeoffs of each.
- We could simulate three stacks in an array by just allocating the first third of the array to the first stack, 
the second third to the second stack, and the final third to the third stack. One might actually be much bigger 
than the others, though. Can we be more flexible with the divisions?
- If you want to allow for flexible divisions, you can shift stacks around. Can you ensure that all available 
capacity is used?
- Try thinking of the array as circular, such that the end of the array 'wraps around' to the start of the array.
*/



// Given a digit string, return all possible letter combinations that the number could represent.
// A mapping of digit to letters (just like on the telephone buttons) is given below.
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].



