// Given a  2D Array, A:

// [ 1 1 1 0 0 0
//   0 1 0 0 0 0
//   1 1 1 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0
//   0 0 0 0 0 0 ]
// We define an hourglass in  to be a subset of values with indices falling in this pattern in 's graphical representation:

// a b c
//   d
// e f g
// There are  hourglasses in , and an hourglass sum is the sum of an hourglass' values.

// Task 
// Calculate the hourglass sum for every hourglass in , then print the maximum hourglass sum.

// Note: If you have already solved the Java domain's Java 2D Array challenge, you may wish to skip this challenge.

// Input Format

// There are  lines of input, where each line contains  space-separated integers describing 2D Array ; every value in  will be in the inclusive range of  to .

// input is 6x6 array
// output is the largest hourglass

const hourglassArr = (array) => {
  let totals = [];
  for (let row = 0; row < 4; row++) {
    const [ a0, a1, a2 ] = array; // take three rows at a time from top
    let temp0 = a0.slice(); // copy each row
    let temp1 = a1.slice();
    let temp2 = a2.slice();

    for (let col = 0; col < 4; col++) {
      let [a, b, c] = temp0; // take three col at a time from left
      const top = a + b + c;

      let [d, e] = temp1;

      let [f, g, h] = temp2;
      const bottom = f + g + h;

      totals.push(top + e + bottom);

      temp0.shift(); // remove first col
      temp1.shift();
      temp2.shift();
    }
    arr.shift(); // remove first row
  }
  return Math.max(...totals);
}

var arr = 
[
  [1,1,1,0,0,0],
  [0,1,0,0,0,0],
  [1,1,1,0,0,0],
  [0,9,2,-4,-4,0],
  [0,0,0,-2,0,0],
  [0,0,-1,-2,-4,0]
];
console.log(hourglassArr(arr));

    

