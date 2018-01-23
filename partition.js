const partition = (array) => {
  let pivotIndex = array.length-1;
  let pivot = array[pivotIndex];
  let leftPointer = 0; // find a number greater or equal to pivot
  let rightPointer = pivotIndex - 1; // find a number less than or equal to pivot

  while (leftPointer <= rightPointer) {
    while(array[leftPointer] < pivot) {
      leftPointer++;
    }
    while(array[rightPointer] > pivot) {
      rightPointer--;
    }
    // swap
    console.log('left', leftPointer, 'right', rightPointer);
    if (leftPointer < rightPointer) {
      console.log('swap', array[leftPointer], array[rightPointer]);
      [array[leftPointer], array[rightPointer]] = [array[rightPointer], array[leftPointer]];
      console.log(array);
    } else {
      break;
    }
    console.log(pivotIndex, leftPointer, rightPointer);
    console.log(array);
    
  }
  [array[pivotIndex], array[leftPointer]] = [array[leftPointer], array[pivotIndex]];
  return array;
}

console.log(partition([7, 6, 2, 1, 5, 4, 3]));