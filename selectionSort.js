const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let lowestNumberIndex = i;
    for (let j = i+1; j < array.length; j++) {
      if (array[j] < array[lowestNumberIndex]) {
        lowestNumberIndex = j;
      }
    }
    if (lowestNumberIndex !== i) { // check if its already in the right place
        [array[lowestNumberIndex], array[i]] = [array[i], array[lowestNumberIndex]];
      }
  }
  return array;  
}
let arr = [5, 6, 7, 1, 2];
console.log(selectionSort(arr));