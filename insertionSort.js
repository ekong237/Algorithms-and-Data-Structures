const insertionSort = (array) => {
 for (let i = 1; i < array.length; i++) {
  let position = i;
  let temp = array[i];
  while(position > 0 && array[position-1] > temp) {
    array[position] = array[position-1];
    position = position-1;
  }
  array[position] = temp;
 }
 return array;
}

let arr = [5, 2, 3, 7, 4, 1];
console.log(insertionSort(arr));

