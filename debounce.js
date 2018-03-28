// https://codepen.io/anon/pen/vRpLPR

let debounce = function(fn, delay) {
  let time = Date.now();
  let delayedFunc = setTimeout(fn, delay);

  return function() {
    let now = Date.now();
    if (time-now < delay) {
      clearTimeout(delayedFunc);
      delayedFunc = setTimeout(fn, delay);
    }
  }
}

