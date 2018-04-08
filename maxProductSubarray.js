// Given an array that contains both positive and negative integers, find the product of the maximum product subarray. 
// Expected Time complexity is O(n) and only O(1) extra space can be used.

// Input: arr[] = {6, -3, -10, 0, 2}
// Output:   180  // The subarray is {6, -3, -10}

// Input: arr[] = {-1, -3, -10, 0, 60}
// Output:   60  // The subarray is {60}

// Input: arr[] = {-2, -3, 0, -2, -40}
// Output:   80  // The subarray is {-2, -40}

const maxProductSubarray = (arr) => {
  let p1 = 0;
  let p2 = 0;
  let bestArr = [];
  let currProd = 1;
  let maxProd = 1;
  for (let i = 0; i < arr.length; i++) {
    currProd *= arr[i];
    // console.log('curr', currProd);
    if (currProd === 0) {
      currProd = 1;
      p1 = i+1;
    }

    if (currProd > maxProd) {
      maxProd = currProd;
      bestArr = [p1, p2+1]
      // console.log(arr.slice(p1,p2+1), bestArr, maxProd);
    }
    p2++;
  }
  return arr.slice(bestArr[0], bestArr[1])
}

// console.log(maxProductSubarray([6, -3, -10, 0, 2]));
// console.log(maxProductSubarray([-1, -3, -10, 0, 60]));
console.log(maxProductSubarray([-2, -3, 0, -2, -40]));