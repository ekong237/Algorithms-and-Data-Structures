// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0

// Map size: S, at worse can be mxn elements
// Time: O(M * N)^2
// Space: O(M * N)

const zeroMatrix = (matrix) => {
  let zeroIndex = new Map();
  matrix.forEach((row, x) => {
    row.forEach((el, y) => {
      if (el === 0) {
        zeroIndex.set(x, y);
      }
    })
  })

  for (let [key, value] of zeroIndex) {
    for (let x = 0; x < matrix.length; x++) {
      for (let y = 0; y < matrix[0].length; y++) {
        if (x === key || y === value) {
          matrix[x][y] = 0;
        }
      }
    }
  }
  console.log(matrix);
  return matrix
}

let matrix = [
  [1, 2, 0, 4],
  [3, 4, 5, 6],
  [7, 0, 6, 7],
  [4, 6, 2, 6]
]

// console.log(zeroMatrix(matrix));
// [ [ 0, 0, 0, 0 ], 
//   [ 3, 0, 0, 6 ], 
//   [ 0, 0, 0, 0 ], 
//   [ 4, 0, 0, 6 ] ]

// Time: O(M * N)
// Space: O(M + N)
const zeroMatrix2 = (matrix) => {
  // track col and rows where zeros are
  let row = new Array(matrix.length).fill(false);
  let col = new Array(matrix[0].length).fill(false);

  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (matrix[x][y] === 0) {
        row[x] = true;
        col[y] = true;
      }
    }
  }
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < matrix[0].length; y++) {
      if (row[y] || col[x]) {
        matrix[y][x] = 0;
      }
    }
  }
  return matrix;
}

console.log(zeroMatrix2(matrix));
// [ [ 0, 0, 0, 0 ], 
//   [ 3, 0, 0, 6 ], 
//   [ 0, 0, 0, 0 ], 
//   [ 4, 0, 0, 6 ] ]
