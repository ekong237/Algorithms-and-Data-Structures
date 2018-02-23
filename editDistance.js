// Given two strings str1 and str2 and below operations that can performed on str1. Find minimum number of edits (operations) required to convert ‘str1’ into ‘str2’.

// Insert
// Remove
// Replace
// All of the above operations are of equal cost

// Input:   str1 = "geek", str2 = "gesek"
// Output:  1
// We can convert str1 into str2 by inserting a 's'.

// Input:   str1 = "cat", str2 = "cut"
// Output:  1
// We can convert str1 into str2 by replacing 'a' with 'u'.

// Input:   str1 = "sunday", str2 = "saturday"
// Output:  3
// Last three and first characters are same.  We basically
// need to convert "un" to "atur".  This can be done using
// below three operations. 
// Replace 'n' with 'r', insert t, insert a


// Edit distance recursive approach
const editDistance = (str1, str2) => {
  let recurse = (str1Index, str2Index) => {
    if (str1Index === 0) {
      return str2Index;
    }
    if (str2Index === 0) {
      return str1Index;
    } 
    if (str1[str1Index] === str2[str2Index]) {
      return recurse(str1Index - 1, str2Index - 1);
    } else {
      return (1 + Math.min(recurse(str1Index - 1, str2Index),
                           recurse(str1Index, str2Index - 1),
                           recurse(str1Index - 1, str2Index - 1)));
    }
    
  }
  return recurse(str1.length - 1, str2.length - 1);
}
let str1 = "saturday";
let str2 = "sunday";
console.log('>',editDistance(str1, str2));


// Edit distance dp approach
const editDistance2 = (str1, str2) => {
  let m = str1.length; //saturday
  let n = str2.length; //sunday

  let dp = new Array(m+1).fill(0);
  dp.forEach((el, i) => dp[i] = new Array(n+1).fill(0));
  
  for (let x = 0; x < m+1; x++) {
    for (let y = 0; y < n+1; y++) {
      if (x === 0) {
        dp[x][y] = y;
      } else if (y === 0) {
        dp[x][y] = x;
      } else if (str1[x-1] === str2[y-1]) {
        dp[x][y] = dp[x-1][y-1];
      } else {

        dp[x][y] = 1 + Math.min(dp[x][y-1],
                                dp[x-1][y],
                                dp[x-1][y-1]);

        // console.log('add:', str1[x], str2[y-1], dp[x][y-1]); // when we move to current x, we add a letter from str1, we add 1 operation cost to left cell
        // console.log('delete:', str1[x-1], str2[y], dp[x-1][y]); // when we move to current y, we add a letter from str2, we add 1 to above cell
        // console.log('replace:', str1[x-1], str2[y-1], dp[x-1][y-1]); // when we move to current x,y, we replace letters from str1 & str2, we add 1 to diagonal left cell
        // console.log('--------');
      }
    }
  }
  // console.log(dp, m, n);
  return dp[m][n]
}

console.log('>',editDistance2(str1, str2));



//.        "" S  U  N  D  A  Y      (x)
//  "" [ [ 0, 1, 2, 3, 4, 5, 6 ],
//  S    [ 1, 0, 1, 2, 3, 4, 5 ],
//  A    [ 2, 1, 1, 2, 3, 3, 4 ],
//  T    [ 3, 2, 2, 2, 3, 4, 4 ],
//  U    [ 4, 3, 2, 3, 3, 4, 5 ],
//  R    [ 5, 4, 3, 3, 4, 4, 5 ],
//  D    [ 6, 5, 4, 4, 3, 4, 5 ],
//  A    [ 7, 6, 5, 5, 4, 3, 4 ],
//  Y    [ 8, 7, 6, 6, 5, 4, 3 ] ]
// (y)