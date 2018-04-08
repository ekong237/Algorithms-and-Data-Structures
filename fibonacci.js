const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibonacci(n-1) + fibonacci(n-2);
}
console.log(fibonacci(10));

const fibo = (n) => {
  let memo = [];
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i-2];
  }
  return memo[n];
}
console.log(fibo(10));


const fib = (n) => {
    let phi = (1 + Math.sqrt(5))/2
    // const phi = 1.618; // Golden Ratio
    return Math.round((Math.pow(phi, n) - Math.pow(-phi, -n)) / Math.sqrt(5));
}
console.log(fib(10));