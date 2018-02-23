// Given a set of coin denominations, find the least amount of coins that sums to total

// recursive approach
const coinChange = (coins, target) => {
  let leastCoins = Infinity;

  const recurse = (sumSoFar, coinsUsed) => {
    if (sumSoFar > target) {
      return;
    } else if (sumSoFar === target) {
      leastCoins = (coinsUsed < leastCoins) ? coinsUsed : leastCoins;
      return;
    } else {
      for (let i = 0; i < coins.length; i++) {
        recurse(sumSoFar + coins[i], coinsUsed + 1)
      }
    }
  }
  recurse(0, 0);
  return leastCoins;
}

console.log('>', coinChange([1, 10, 15, 50], 55));


// dynamic programming approach
const coinChange2 = (coins, target) => {
  let dp = [];
  dp[0] = 0;
  for (let i = 1; i <= target; i++) {
    let minCoin = Number.MAX_SAFE_INTEGER;

    for (let j = 0; j < coins.length; j++) {
      let coin = coins[j];
      if (i - coin >= 0) {
        // console.log('i & coin', i, coin, i-coin);
        minCoin = Math.min(minCoin, dp[i-coin])
        console.log(minCoin);
      }      
    } 
    dp[i] = minCoin + 1;   
  }
  return dp[target]
}

console.log('>', coinChange2([1, 10, 15, 50], 55));