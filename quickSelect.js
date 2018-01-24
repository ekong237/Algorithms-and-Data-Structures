const partition = (array, leftIndex, rightIndex) => {
  let pivotIndex = Math.floor( (leftIndex + rightIndex) / 2);
  let pivot = array[pivotIndex];
  
  while (leftIndex <= rightIndex){
    while(array[leftIndex] < pivot){
      leftIndex++;
    }
    
    while(array[rightIndex] > pivot){
      rightIndex--;
    }
    
    if (leftIndex <= rightIndex){
      //swap
      [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]];
      leftIndex++;
      rightIndex--;
      // console.log(leftIndex, rightIndex);
    } 
  }
  return leftIndex;
}

const quickSelect = (array, kthLowest, left, right) => {
  if(right - left <= 0) {
    return;
  }
  let pivotIndex = partition(array, left, right);
  let pivot = array[pivotIndex];

  if (kthLowest < pivotIndex-1) {
    return quickSelect(array, kthLowest, left, pivotIndex - 1);
  } else if (kthLowest > pivotIndex){
    return quickSelect(array, kthLowest, pivotIndex, right);
  } else {
    return array[pivotIndex-1];    
  }
}

let array = [5, 2, 6, 8, 4, 3, 16, 7, 12];
console.log(quickSelect(array, 4, 0, array.length-1));
// console.log(array.sort((a,b) => {return a-b}));
// [ 2, 3, 4, 5, 6, 7, 8, 12, 16 ]

