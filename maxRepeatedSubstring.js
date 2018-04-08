const maxRepeatedSubstring = (s1, s2) => {
  let m = s1.length + 1;
  let n = s2.length + 1;
  let matrix = new Array(m).fill(0).map(() => new Array(n).fill(0));
  let largestLength = 0;

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (s1[i-1] === s2[j-1]){ 
      // minus 1 because 0th element is ' ', 1st element is 'z' & 'a' respectively
        // console.log('same', s1[i], s2[j]);
        matrix[i][j] = matrix[i-1][j-1] + 1;
        largestLength = Math.max(matrix[i][j], largestLength);
      }
    }
  }
  // console.log(matrix);
  return largestLength;
}

console.log(maxRepeatedSubstring('zbcdf', 'abcdaf')); //3

//         '' a  b  c  d  a  f
//  '' [ [ 0, 0, 0, 0, 0, 0, 0 ],
//   z   [ 0, 0, 0, 0, 0, 0, 0 ],
//   b   [ 0, 0, 1, 0, 0, 0, 0 ],
//   c   [ 0, 0, 0, 2, 0, 0, 0 ],
//   d   [ 0, 0, 0, 0, 3, 0, 0 ],
//   f   [ 0, 0, 0, 0, 0, 0, 1 ] ]