//https://codepen.io/anon/pen/vRpLPR

let throttle = function(fn, delay) {
  let time = Date.now();

  return function(...args) {
    let now = Date.now();
    if (now - time >= delay) {
      fn.apply(...args);
      time = Date.now();
    }
  }
}

const LogHi = () => console.log('HIHIHIHI!');

let myfunc = throttle(LogHi, 1000);

