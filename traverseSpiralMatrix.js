// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// For example, given the following matrix:


// You should return [1,2,3,6,9,8,7,4,5].

// input matrix
// output is array of values order you traversed

// start at top left corner
// i = 0 (row), j = 0 (col)

// while row is less than row max && col is less than col max
  // traverse right from 0col to end col
    // decrease top row by 1

  // traverse down from 0row to end row
    // decrease col by 1

  // if bottom is less than top, break
  // prevent duplicate row

  // traverse left from end coll to 0 col
    // decrease bottom by 1

  // if right less than left, break
  // prevent duplicate col

  // traverse from end row to top
    // decrease left by 1

const traverseSpiralMatrix = (matrix) => {
  let row = matrix.length - 1; //row
  let col = matrix[0].length - 1; //col

  let topRow = 0;
  let leftCol = 0;
  let bottomRow = row;
  let rightCol = col;

  let result = [];
  while (result.length < row*col) {
    for (let i = leftCol; i <= rightCol; i++) {
      console.log(matrix[topRow][i]);
      result.push(matrix[topRow][i])
    }
    topRow++;

    for (let j = topRow; j <= bottomRow; j++) {
      console.log(matrix[j][rightCol]);
      result.push(matrix[j][rightCol])
    }
    rightCol--;

    if (bottomRow < topRow) {
      break;
    }

    for (let k = rightCol; k >= leftCol; k--) {
      console.log(matrix[bottomRow][k]);
      result.push(matrix[bottomRow][k])
    }
    bottomRow--;

    if (rightCol < leftCol) {
      break;
    }

    for (let l = bottomRow; l >= topRow; l--) {
      console.log(matrix[l][leftCol]);
      result.push(matrix[l][leftCol])
    }
    leftCol++;
  }
  return result;
}

let arr = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]

console.log(traverseSpiralMatrix(arr));

