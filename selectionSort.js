const selectionSort = (array) => {
  let currentIndex = 0;
  
  let smallestSoFarIndex = 0;
  let smallestSoFar = array[smallestSoFarIndex];

  while(currentIndex <= array.length -1) {
    for(let i = currentIndex; i < array.length; i++) {
      if (array[i] <= array[smallestSoFarIndex]) {
        smallestSoFarIndex = i;
      }
      if (i === array.length - 1) {
        [array[currentIndex], array[smallestSoFarIndex]] = [array[smallestSoFarIndex], array[currentIndex]]
      }
    }
    currentIndex++;
  }
  return array;
}
let arr = [5, 6, 7, 1, 2];
console.log(selectionSort(arr));