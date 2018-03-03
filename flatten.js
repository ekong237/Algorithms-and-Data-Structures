const flatten = (array) => {
  return array.reduce((acc, el, i) => {
    let add;
    if (Array.isArray(el)) {
      add = flatten(el)
    } else {
      add = el;
    }
    return acc.concat(add);
  }, []);
}



let array = [1, [2, [3, 3, 3]], 4, [5, 6]];
console.log(flatten(array));