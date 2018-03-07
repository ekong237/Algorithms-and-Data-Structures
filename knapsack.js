// Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. 
// In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. 
// Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. 
// You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).
// can only pick an item once

// recursive 
// Left branch: dont select item; Right branch: select item
const knapsack = (val, wt, W) => {
  // let highestVal = 0;
  const recurse = (Wleft, itemNum) => {
    console.log(Wleft, itemNum);
    if (itemNum === wt.length) {
      return 0;
    } 
    if (wt[itemNum] > Wleft) { //skip current item, move onto next
      return recurse(Wleft, itemNum+1)
    } else {
      let takeItem = val[itemNum] + recurse(Wleft - wt[itemNum], itemNum + 1)
      let notTakeItem = recurse(Wleft, itemNum + 1);

      return Math.max(takeItem, notTakeItem);
    }
    
  }
  return recurse(W, 0);
  console.log(highestVal);
}

var val = [1, 2, 5, 9];
var wt = [2, 3, 3, 4];
var W = 7;
// console.log(knapsack(val, wt, W));

const knapsack2 = (val, wt, W) => {
  let dp = new Array(wt.length+1).fill(0);
  dp.forEach((el, i) => dp[i] = new Array(W + 1).fill(0));

  for (let itemNum = 1; itemNum < wt.length + 1; itemNum++) { // curr item is -1 index because first item in val starts at index 0
    for (let weight = 1; weight < W + 1; weight++) {
       if (wt[itemNum-1] > weight) {
        dp[itemNum][weight] = dp[itemNum-1][weight];
      } else { // when we take item, we want to see how much weight we have left to see if we can add prev items
        let weightAfterSubtracting = weight - wt[itemNum-1];
        let takeItem = dp[itemNum-1][weightAfterSubtracting] + val[itemNum-1];
        dp[itemNum][weight] = Math.max(dp[itemNum-1][weight], takeItem);
      }
      
    }
  }
  console.log(dp);
  return dp[wt.length][W];
}


console.log(knapsack2(val, wt, W));

// [ [ 0, 0, 0, 0, 0, 0, 0, 0 ],
//   [ 0, 0, 1, 1, 1, 1, 1, 1 ],
//   [ 0, 0, 1, 2, 2, 3, 3, 3 ],
//   [ 0, 0, 1, 5, 5, 6, 7, 7 ],
//   [ 0, 0, 1, 5, 9, 9, 10, 14 ] ]