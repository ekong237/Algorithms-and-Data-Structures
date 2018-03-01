// Follow up for "Unique Paths":
// Now consider if some obstacles are added to the grids. How many unique paths would there be?
// An obstacle and empty space is marked as 1 and 0 respectively in the grid.

// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.

// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// The total number of unique paths is 2.
// Note: m and n will be at most 100.

// recursively move right or move down
// only add to unique paths if destination is reached
// only move right or down if next step is not a "1"

// Recursive approach
const uniquePaths = (grid) => {
  let maxRowI = grid.length - 1;
  let maxColI = grid[0].length - 1;

  let countPath = 0;
  const recurse = (row, col) => {
    // console.log(row, col, grid[row][col]);
    if (row > maxRowI || col > maxColI) {
      return;
    } else if (row === maxRowI && col === maxColI) {
      countPath++;
    } else {
      if (grid[row+1] && grid[row+1][col] === 0) {
        recurse(row+1, col);
      }
      if (grid[row][col+1] === 0) {
        recurse(row, col+1);
      }
    }
  }
  recurse(0, 0);
  return countPath;
}

const uniquePathsDP = (grid) => {
  let m = grid.length;
  let n = grid[0].length;

  let dp = new Array(m).fill(0);
  dp.forEach((el,i) => dp[i] = new Array(n).fill(0));

  // initialize 0th row
  for (let col = 0; col < n; col++) {
    if (grid[0][col] === 1 || dp[0][col-1] === 0) {
      dp[0][col] = 0;
    } else {
      dp[0][col] = 1;
    }
  }

  // initialize 0th col
  for (let row = 0; row < m; row++) {
    if (grid[row][0] === 1 || (dp[row-1] && dp[row-1][0] === 0)) {
      dp[row][0] = 0;
    } else {
      dp[row][0] = 1;
    }
  }

  // fill in the rest
  for (let col = 1; col < n; col++) {
    for (let row = 1; row < m; row++) {
      if (grid[row][col] === 1) {
        dp[row][col] = 0;
      } else {
        dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
      }
    }
  }
  console.log(dp);
  return dp[m-1][n-1];
}

let arr = [
  [0,0], 
  [1,1], 
  [0,0]
];

let arr1 =  [
  [0,0,0],
  [1,1,1],
  [0,0,0]
];

let arr2 = [
  [0,0,0,0],
  [0,0,0,0],
  [0,0,1,0],
  [0,0,0,0],
  [0,0,0,0]
]; //17

let arr3 = [
  [0,0,1,1],
  [0,0,0,0],
  [0,0,1,0],
  [0,0,0,0],
  [0,0,0,0]
]; //15
console.log(uniquePathsDP(arr3)); 





