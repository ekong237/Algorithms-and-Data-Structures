const binarySearch = (array, target) => {
  let index = -1;
  const search = (startI, endI) => {
    let middleI = Math.floor((startI + endI)/2);
    if (target === array[middleI]) {
       index = middleI;
    } else if (array[middleI] < target) {
      search(middleI + 1, endI);
    } else if (array[middleI] > target) {
      search(startI, middleI - 1);
    } 
  }
  search(0, array.length-1);
  return index;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(array, 7));