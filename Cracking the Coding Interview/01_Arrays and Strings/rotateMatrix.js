// Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, 
// write a method to rotate the image by 90 degrees counterclockwise. Can you do this in place?



const rotateMatrix = (matrix) => {
  let N = matrix.length;
  for (let x = 0; x < N/2; x++) {
    for (let y = x; y < N-1-x; y++) { 
    // N-1 is last el; 
    // x = 0; y = 1
    // [0][1] -> [1][3]
    // [1][3] -> [3][2]
    // [3][2] -> [2][0]
    // [2][0] -> [0][1]

    let temp = matrix[x][y];
    matrix[x][y] = matrix[y][N-1-x];
    matrix[y][N-1-x] = matrix[N-1-x][N-1-y];
    matrix[N-1-x][N-1-y] = matrix[N-1-y][x];
    matrix[N-1-y][x] = temp;
    }
  }
  return matrix;
}

// rotations are composite reflections
// so, reflect accross vertical line of symmetry
// then, reflect accross diagonal

// if rotate counter clockwise, reverse rows
// if rotate clockwise, reverse col (each row)

const rotateMatrixClockwise = (matrix) => {
  matrix = matrix.reverse();
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < x; y++) {
      let temp = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = temp;
    }
  }
  return matrix;
}

const rotateMatrixCounterClockwise = (matrix) => {
  matrix = matrix.map(row => row.reverse());
  for (let x = 0; x < matrix.length; x++) {
    for (let y = 0; y < x; y++) {
      let temp = matrix[x][y];
      matrix[x][y] = matrix[y][x];
      matrix[y][x] = temp;
    }
  }
  return matrix;
}

let matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

// console.log(rotateMatrix(matrix);
// [ [ 4, 8, 12, 16 ],
//   [ 3, 7, 11, 15 ],
//   [ 2, 6, 10, 14 ],
//   [ 1, 5, 9, 13 ] ]

// console.log(rotateMatrixClockwise(matrix);
// [ [ 13, 9, 5, 1 ],
//   [ 14, 10, 6, 2 ],
//   [ 15, 11, 7, 3 ],
//   [ 16, 12, 8, 4 ] ]

console.log(rotateMatrixCounterClockwise(matrix));
// [ [ 4, 8, 12, 16 ],
//   [ 3, 7, 11, 15 ],
//   [ 2, 6, 10, 14 ],
//   [ 1, 5, 9, 13 ] ]