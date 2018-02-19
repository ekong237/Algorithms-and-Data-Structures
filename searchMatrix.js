// Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.

// For example, consider the following matrix:


// input is a matrix of m x n; m is rows; n is col
// output boolean whether the target is found

// n is num of rows
  // m is col
  // we traverse from larger to smaller 

let searchMatrix = (matrix, target) => {
  let row = matrix.length - 1;
  let col = matrix[0].length - 1;

  let i = row;
  let j = 0;

  while (i >= 0 && j <= col) {
    console.log(matrix[i][j]);
    if (target < matrix[i][j]) {
      console.log(target, '<', matrix[i][j], 'go up a row');
      i--;
    } else if (target > matrix[i][j]) {
      console.log(target, '>', matrix[i][j], 'go right a col');
      j++;
    } else {
      return true;
    }
  }
  return false;
}

let arr = [
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
];

console.log(searchMatrix(arr, 9.5));

// This is O(n + m)
// we only traverse each row + col once
