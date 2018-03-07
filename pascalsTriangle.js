// Given numRows, generate the first numRows of Pascal's triangle. For example, given numRows = 5, the result should be:

// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const pascalTriangle = (numRows, triangleSoFar) => {
  let triangle = [
    [1]
  ];
  for (let row = 0; row < numRows - 1; row++) {
    let currLevel = [1];
    for(let i = 1; i < triangle[row].length; i++) {
      currLevel[i] = triangle[row][i] + triangle[row][i-1];
    }
    currLevel.push(1);
    triangle.push(currLevel);
  }

  return triangle;
}

console.log(pascalTriangle(5, [[1]]));