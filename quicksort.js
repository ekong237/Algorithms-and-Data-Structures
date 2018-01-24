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
    } else {
      break;
    }
  }
  return leftIndex;
}


var quickSort = function(array, left, right){
  var pivotIndex = partition(array, left, right);
  if (left < pivotIndex - 1){
    quickSort(array, left, pivotIndex-1);
  }
  if (right > pivotIndex){
    quickSort(array, pivotIndex, right);
  }
  return array;
}
let array = [0, 5, 2, 1, 6, 3];
console.log(quickSort(array, 0, array.length-1));
