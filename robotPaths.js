// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).
// How many possible unique paths are there?

// recursive approach
const uniquePaths = (m, n) => {
    let count = 0;
    let recurse = (currM, currN) => {
        if (currM >= m || currN >= n) {
            return;
        }
        if (currM === m-1 && currN === n-1) {
            count++;
        }
        recurse(currM+1, currN);
        recurse(currM, currN+1);
    }
    recurse(0, 0);
    return count;
};

// uniquePaths(5,5) //70
// uniquePaths(3,2) //3
// uniquePaths(3,7) //28

// dynamic programming appraoch
const uniquePathsDP = (m, n) => {
  let dp = new Array(m).fill(0);
  dp.forEach((el,i) => dp[i] = new Array(n).fill(0));

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (x === 0 || y === 0) {
        dp[x][y] = 1;
      } else {
        dp[x][y] = dp[x-1][y] + dp[x][y-1];
      }
    }
  }
  return dp[m-1][n-1]
}

console.log(uniquePathsDP(3,3));