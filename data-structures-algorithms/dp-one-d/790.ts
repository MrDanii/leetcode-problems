// Bottom-Up (Solution)
function numTilingsIterative(n: number): number {
  if (n < 3) return n;

  const myMod: number = 1000000007  //  Since the answer may be very large, return it modulo 10^9 + 7.
  let prev1: number = 5 // when n = 3, result = 5
  let prev2: number = 2 // when n = 2, result = 2
  let prev3: number = 1 // when n = 1, result = 1

  for (let i = 0; i < (n - 3); i++) {
    const auxPrev1 = prev1
    const auxPrev2 = prev2
    prev1 = ((prev1 * 2) + (prev3)) % myMod
    prev2 = auxPrev1
    prev3 = auxPrev2
  }

  return prev1
}

// Top-Down Memoization (Recursive solution with memo)
function numTilingsMemo(n: number): number {
  let memo: number[] = [0, 1, 2, 5]  // 0 at the begining to start index from 1

  const startTiling = (curN: number): number => {
    if (memo[curN] != undefined) {
      return memo[curN]
    }
    const res = (startTiling(curN - 1) * 2) + startTiling(curN - 3)
    memo[curN] = res
    return res
  }

  startTiling(n)

  return memo[n]
}

// Top-Down (Recursive solution)
function numTilings(n: number): number {
  if (n == 1) return 1
  if (n == 2) return 2
  if (n == 3) return 5
  return (numTilings(n - 1) * 2) + numTilings(n - 3)
};

// Example 1:
// Input: n = 4
// Output: 11
// console.log(numTilings(4));

// Example 1:
// Input: n = 5
// Output: 24
// console.log(numTilings(5));

// Testcase 11
// Input: n = 30
// Output: 312342182

console.log(numTilingsIterative(30));
console.log(numTilingsIterative(50));

// ? testing best time

let time1: number, time2: number

// console.log('Recursive');
// time1 = new Date().getTime();
// console.log(numTilings(30));
// time2 = new Date().getTime();
// console.log(time2 - time1);

// console.log('Recursive with memo');
// time1 = new Date().getTime();
// console.log(numTilingsMemo(30));
// time2 = new Date().getTime();
// console.log(time2 - time1);

// console.log('Iterative');
// time1 = new Date().getTime();
// console.log(numTilingsIterative(30));
// time2 = new Date().getTime();
// console.log(time2 - time1);
