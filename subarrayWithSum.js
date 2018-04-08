// Given an unsorted array of nonnegative integers, find a continous subarray which adds to a given number.

// Examples:

// Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Ouptut: Sum found between indexes 2 and 4

// Input: arr[] = {1, 4, 0, 0, 3, 10, 5}, sum = 7
// Ouptut: Sum found between indexes 1 and 4

// Input: arr[] = {1, 4}, sum = 0
// Output: No subarray found

// const subarrayWithSum = (arr, sum) => {
//   let count = 0;
//   for(let i = 0; i < arr.length; i++) {
//     let sumSoFar = arr[i];
//     for (let j = i + 1; j < arr.length; j++) {
//       if (sumSoFar === sum) {
//         console.log('found', arr.slice(i, j));
//         return arr.slice(i, j);
//       }
//       if (sumSoFar > sum || j === arr.length - 1) {
//         break;
//       }
//       sumSoFar += arr[j];
//     }
//   }
// }

// subarrayWithSum([1, 4, 20, 3, 10, 5], 33);
// O(N)^2



const subarrayWithSum = (arr, sum) => {
  let p1 = 0;
  let currSum = arr[0];
  for (let p2 = 1; p2 < arr.length; p2++) {
    console.log('currSum', currSum, p2, p1);
    // if current sum exceeds sum, remove starting element
    while(currSum > sum) {
      console.log('while larger', currSum, p1);
      currSum = currSum - arr[p1]
      p1++;
    }
    console.log(currSum);
    if (currSum === sum) {
      return arr.slice(p1, p2)
    }
    currSum += arr[p2];
  }
  return false;
}

console.log(subarrayWithSum([2, 3, 4, 8, 1, 9, 5, 10, 23], 23));


// There are at most 2 operations performed on every element: 
// the element is added to the curr_sum 
// the element is subtracted from curr_sum. 
// So the upper bound on number of operations is 2n which is O(n).
// O(N)



