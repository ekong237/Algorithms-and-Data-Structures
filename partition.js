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
      console.log(leftIndex, rightIndex);
    } else {
      break;
    }
  }
  return leftIndex;
}
let array = [7, 6, 2, 1, 5, 4, 3];
partition(array, 0, array.length - 1);
console.log(array);