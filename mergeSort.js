const merge = (left, right) => {
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }
  while(left.length) {
    sorted.push(left.shift())
  }

  while(right.length) {
    sorted.push(right.shift())
  }
  return sorted;
}

const mergeSort = (array) => {
  if (array.length < 2) {
    return array;
  } else {
    let middle = Math.floor((array.length) / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
  }
}

console.log(merge([1],[1]));
console.log('>',mergeSort([4, 6, 2, 8, 3]));
