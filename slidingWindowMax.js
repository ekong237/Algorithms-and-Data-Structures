const slidingWindowMax = (arr, k) => {
  let result = [];
  let p1 = 0;
  for (let p2 = k-1; p2 < arr.length; p2++) {
    let maxEl = Math.max(...arr.slice(p1,p2+1));
    console.log(maxEl, arr.slice(p1, p2+1));
    result.push(maxEl);
    p1++;
  }
  return result;
}

let arr = [9, 4, 3, 8, 4, 7, 2, 6, 8];
//                        [       ]
// [9, 8, 8, 8, 7, 7, 8]
// console.log(slidingWindowMax(arr, 3));










































const slidingWindowMax2 = (arr, k) => {
  let result = [];
  let p1 = 0;
  for (let p2 = k-1; p2 < arr.length; p2++) {
    // let curr = arr[p2];
    let max = arr[p2];
    for (let j = p1; j < p2; j++) {
      max = Math.max(arr[j], max);
    }
      console.log(max);
    result.push(max)
    p1++;
  }
  return result;
}
// let arr = [9, 4, 3, 8, 4, 7, 2, 6, 8];
console.log(slidingWindowMax2(arr, 3));














