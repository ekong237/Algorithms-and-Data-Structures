// Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

// Example 1:
// Input:
// A: [1,2,3,2,1]
// B: [3,2,1,4,7]
// Output: 3
// Explanation: 
// The repeated subarray with maximum length is [3, 2, 1].


const maxRepeatedSubarray = (A, B) => {
  let m = A.length + 1;
  let n = B.length + 1;
  let longest = 0;

  let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (A[i-1] === B[j-1]) {
        matrix[i][j] = matrix[i-1][j-1] + 1;

        longest = Math.max(longest, matrix[i][j]);
      }
    }
  }
  return longest;
}

let A = [3,2,1,4,7];
let B = [1,2,2,3,2,1];
// let A = [2, 4, 5, 7, 10];
// let B = [1, 2, 2, 3, 5, 6, 7, 8, 9, 10];
console.log(maxRepeatedSubarray(A, B));;


