const bubbleSort = (array) => {
  let iteration = array.length;
  while(iteration > 0) {
    for (let i = 0; i < array.length; i++) {
      console.log(array[i], array[i+1]);
      if (array[i] > array[i+1]) {
        [array[i+1], array[i]] = [array[i], array[i+1]];
        console.log('swapped', array[i], array[i+1]);
      }
    }
    iteration--;
  }
  return array;
}

let array = [4, 2, 7, 1, 3];
console.log(bubbleSort(array));