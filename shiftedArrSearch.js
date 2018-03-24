// A sorted array of distinct integers shiftArr is shifted to the left by an unknown offset and you don’t have a pre-shifted copy of it. 
// For instance, the sequence 1, 2, 3, 4, 5 becomes 3, 4, 5, 1, 2, after shifting it twice to the left.

// Given shiftArr and an integer num, implement a function shiftedArrSearch that finds and returns the index of num in shiftArr. 
// If num isn’t in shiftArr, return -1. Assume that the offset doesn’t equal to 0 (i.e. assume the array is shifted at least once) or to arr.length - 1 (i.e. assume the shifted array isn’t fully reversed).

// Explain your solution and analyze its time and space complexities.

let findPivot = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle - 1] > arr[middle]) { // if prev num is larger than current middle, this is the pivot
      return middle;
    }
    if (arr[middle] > arr[0]) { // if middle is larger than first num, then left side is sorted order, limit search to look on right side
      start = middle + 1;
    } else {
      end = middle - 1; // if middle is smaller than first num, then left side is not in sorted order, pivot is on left side, limit search to left
    }
  }
}

let binarySearch = (arr, start, end, num) => {
  while (start < end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === num) {
      return middle;
    } else if (num > arr[middle]) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
}

let rotatedBinarySearch = (arr, num) => {
  let pivot = findPivot(arr);
  // search left of pivot, and right of pivot where each half is sorted
  if (num < arr[0]) { // 2 < 5, search on right
    return binarySearch(arr, pivot, arr.length - 1, num);
  } else {
    return binarySearch(arr, 0, pivot - 1, num);    
  }
}

let arr = [5, 9, 12, 17, 2, 4, 5];
// console.log(findPivot(arr));
console.log(rotatedBinarySearch(arr, 4));