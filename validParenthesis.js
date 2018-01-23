// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

const validParenthesis = (string) => {
  let stack = [];
  for(let i = 0; i < string.length; i++) {
    let char = string[i];

    if (['(', '{', '['].indexOf(char) > -1) {
      stack.push(char);
    } else if (char === ')') {
      if (stack[stack.length - 1] === '(') {
        stack.pop();
      }
    } else if (char === '}') {
      if (stack[stack.length - 1] === '{') {
        stack.pop();
      }
    } else if (char === ']') {
      if (stack[stack.length - 1] === '[') {
        stack.pop();
      }
    }
  }
  console.log(stack);
  return stack.length === 0;
}

console.log(validParenthesis('()['));