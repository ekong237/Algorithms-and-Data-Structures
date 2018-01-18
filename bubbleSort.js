const bubbleSort = (array) => {
  let iteration = array.length;
  while(iteration > 0) {
    for (let i = 0; i < iteration; i++) {
      if (array[i] > array[i+1]) {
        [array[i+1], array[i]] = [array[i], array[i+1]];
      }
    }
    iteration--;
  }
  return array;
}

let array = [4, 2, 7, 1, 3];
console.log(bubbleSort(array));