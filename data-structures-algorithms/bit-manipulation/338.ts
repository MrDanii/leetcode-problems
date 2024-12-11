function countBits(n: number): number[] {
  const ans: number[] = [0]
  for (let i = 1; i <= n; i++) {
    ans[i] = ans[i >> 1] + (i & 1)
  }
  return ans
};

// Example 2:
// Input: n = 5
// Output: [0,1,1,2,1,2]
console.log(countBits(5));
