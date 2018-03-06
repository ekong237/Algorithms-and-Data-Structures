//Create an algorithm to find the subsequence with the highest sum among all possible subsequences.


const largestSumSubsequence = (arr) => {
  let startP = 0;
  let sumSoFar = 0;
  let sequenceCount = 1;

  let bestStart = startP;
  let largestSum = sumSoFar;
  let longestSequence = sequenceCount;

  for (let endP = 0; endP < arr.length; endP++) {
    let current = arr[endP];

    if (sumSoFar < 0) { // start new window if new number added sums to negative
      // console.log('new window');
      sequenceCount = 1;
      startP = endP;
      sumSoFar = current;
    } else {
      sequenceCount++;
      sumSoFar += current;
    }
    
    if (sumSoFar > largestSum) {
      largestSum = sumSoFar;
      bestStart = startP;
      longestSequence = sequenceCount;
    }
    // console.log(arr.slice(bestStart, bestStart+sequenceCount), 'sum', sumSoFar);

  }
  return largestSum;
}

let arr = [2, 5, -8, 3, 9, -2, -4, 0, 2, 6, -3, -5, 0, -4, 2, 3, 1];
console.log(largestSumSubsequence(arr));
