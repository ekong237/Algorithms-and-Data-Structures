// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

const mergeSortedArr = (arr1, arr2) => {
  let p1 = 0;
  let p2 = 0;
  let result = [];

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) {
      result.push(arr1[p1]);
      p1++;
    } else if (arr1[p1] > arr2[p2]) {
      result.push(arr2[p2]);
      p2++;
    } else {
      result.push(arr1[p1]);
      p1++;
      p2++;
    }
  }
  console.log(result);
}

let arr1 = [2, 4, 16, 19, 31];
let arr2 = [7, 16, 17, 18, 19, 30, 31];
mergeSortedArr(arr1, arr2);