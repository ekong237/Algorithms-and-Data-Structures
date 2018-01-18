const binarySearch = (array, target) => {
  let index = -1;
  const search = (startI, endI) => {
    let middleI = Math.floor((startI + endI)/2);
    if (startI >= endI) {
      return;
    }
    if (target === array[middleI]) {
       index = middleI;
       return;
    } else if (target > array[middleI]) {
      search(middleI + 1, endI);
    } else if (target < array[middleI]) {
      search(startI, middleI - 1);
    } 
  }
  search(0, array.length-1);
  return index;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(binarySearch(array, 7))

const iterativeBinarySearch = (array, target) => {
  let startI = 0;
  let endI = array.length - 1;

  while (startI <= endI) {
    let middleI = Math.floor((startI + endI)/2);
    if (target === array[middleI]) {
      return middleI;
    } else if (target > array[middleI]) {
      startI = middleI + 1;
    } else if (target < array[middleI]) {
      endI = middleI - 1;
    }
  }
  return -1;
}

// let array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(iterativeBinarySearch(array, 7));