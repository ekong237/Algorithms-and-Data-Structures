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
    } 
  }
  return leftIndex;
}


var quickSort = function(array, left, right){
  var leftIndex = partition(array, left, right);

  if (left < leftIndex - 1){
    quickSort(array, left, leftIndex - 1); 
  }
  if (right >= leftIndex){
    quickSort(array, leftIndex, right); 
  }
  return array;
}
let array = [0, 5, 2, 1, 6, 3];
console.log(quickSort(array, 0, array.length-1));
