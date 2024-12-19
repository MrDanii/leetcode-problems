// * Bottom-Up solution (Iterative)
//! not mine need to analyze this
function numRollsToTarget2(n: number, k: number, target: number): number {
  const f = Array.from({ length: n + 1 }, () => Array(target + 1).fill(0));
  f[0][0] = 1;
  const mod = 1e9 + 7;
  for (let i = 1; i <= n; ++i) {
      for (let j = 1; j <= Math.min(i * k, target); ++j) {
          for (let h = 1; h <= Math.min(j, k); ++h) {
              f[i][j] = (f[i][j] + f[i - 1][j - h]) % mod;
          }
      }
  }
  return f[n][target];
};

// * Top-Down solution (recursive with memo)
function numRollsToTarget(n: number, k: number, target: number): number {
  // special case with one dice
  if (n == 1) {
    return (target <= k) ? 1 : 0
  }

  const customMod: number = 1e9 + 7
  const memo = {}

  const calculateRoll = (dicesQty: number, k: number, target: number): number => {
    if (memo[`${dicesQty}:${target}`] != undefined) {
      return memo[`${dicesQty}:${target}`]  // returned value if it was calculated before
    }

    if (dicesQty == 0 || target < 0) {
      return (target == 0) ? 1 : 0
    }

    let answer: number = 0
    for (let i = 1; i <= k; i++) {
      // "i" represents all possible numbers in our dice, starting from "1" to "k" faces (inclusive)
      answer = (answer + (calculateRoll(dicesQty - 1, k, target - i))) % customMod
    }

    memo[`${dicesQty}:${target}`] = answer
    return answer
  }

  return calculateRoll(n, k, target)
};

// Example 1:
// Input: n = 1, k = 6, target = 3
// Output: 1
console.log(numRollsToTarget(1, 6, 3));

// Example 2:
// Input: n = 2, k = 6, target = 7
// Output: 6
console.log(numRollsToTarget(2, 6, 7));

// Example 3:
// Input: n = 30, k = 30, target = 500
// Output: 222616187
console.log(numRollsToTarget(30, 30, 500));