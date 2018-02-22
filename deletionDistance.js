// The deletion distance of two strings is the minimum number of characters you need to delete in the two strings in order to get the same string. For instance, the deletion distance between "heat" and "hit" is 3:

// By deleting 'e' and 'a' in "heat", and 'i' in "hit", we get the string "ht" in both cases.
// We cannot get the same string from both strings by deleting 2 letters or fewer.
// Given the strings str1 and str2, write an efficient function deletionDistance that returns the deletion distance between them. Explain how your function works, and analyze its time and space complexities.

// Examples:

// input:  str1 = "dog", str2 = "frog"
// output: 3

// input:  str1 = "some", str2 = "some"
// output: 0

// input:  str1 = "some", str2 = "thing"
// output: 9

// input:  str1 = "", str2 = ""
// output: 0

// m = str1 length 
// n = str2 length
// create table dp[m+1][n+1]

const deletionDistance = (str1, str2) => {
  let m = str1.length; //dog
  let n = str2.length; //frog

  let dp = new Array(m+1).fill(0);
  dp.forEach((el, i) => dp[i]= new Array(n+1).fill(0));

  for (let x = 0; x < m+1; x++) {
    for (let y = 0; y < n+1; y++) {
      if (x === 0) {
        dp[x][y] = y;
      } else if (y === 0) {
        dp[x][y] = x;

      // if last char are same, ignore last char
      // count remaining char
      } else if (str1[x-1] === str2[y-1]) {
        console.log(str1[x-1], str2[y-1]);
        dp[x][y] = dp[x-1][y-1];
        console.log('prev>', dp[x-1][y-1]);

      // last char diff, delete remaining char
      } else {
        dp[x][y] = 1 + Math.max(dp[x-1][y], dp[x][y-1]);
      }
    }
  }
  console.log(dp);
}

deletionDistance('dog', 'frog')

//       '', f. r. o. g. 
// '' [ [ 0, 1, 2, 3, 4 ], 
//  d   [ 1, 2, 3, 4, 5 ],
//  o   [ 2, 3, 4, 3, 6 ],
//  g   [ 3, 4, 5, 6, 3 ] ]


