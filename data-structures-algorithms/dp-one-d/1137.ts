// Iterative solution fibonacci (Bottom-Up)
function fibonacci2(n: number): number {
  if (n <= 0) return 0;
  if (n == 1) return 1

  let fibonacci: number = 1
  let prevFib: number = 1

  for (let i = 2; i < n; i++) {
    let tempFib: number = fibonacci
    fibonacci += prevFib
    prevFib = tempFib
  }

  return fibonacci
}

// Iterative solution tribonacci (Bottom-Up)
function tribonacci2(n: number): number {
  if (n <= 0) return 0;
  if (n == 1 || n == 2) return 1

  let fibonacci: number = 2
  let prevFib: number = 1
  let prevFib2: number = 1

  for (let i = 3; i < n; i++) {
    let tempFib: number = fibonacci
    let tempPrevFib: number = prevFib
    fibonacci += prevFib + prevFib2
    prevFib = tempFib
    prevFib2 = tempPrevFib
  }

  return fibonacci
}

// Recursive solution fibonacci (Top-Down)
function fibonacci(n: number): number {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1)
  }
}

// Recursive solution tribonacci (Top-Down)
function tribonacci(n: number): number {
  if (n == 0) {
    return 0
  } else if (n == 1 || n == 2) {
    return 1
  } else {
    return tribonacci(n - 3) + tribonacci(n - 2) + tribonacci(n - 1)
  }
};

// Example 1:
// Input: n = 4
// Output: 4
// console.log(tribonacci(4));
// console.log(tribonacci2(4));
// console.log(fibonacci(4));

// Example 2:
// Input: n = 25
// Output: 1389537
let time1: number, time2: number

time1 = new Date().getTime()
// console.log(tribonacci(25));
console.log(fibonacci(25));
time2 = new Date().getTime()
console.log((time2 - time1));

time1 = new Date().getTime()
// console.log(tribonacci2(25));
console.log(fibonacci2(25));
time2 = new Date().getTime()
console.log((time2 - time1));

