function minDistance(word1: string, word2: string): number {
  if (word1.length == 0 || word2.length == 0) return Math.max(word1.length, word2.length)
  if (word1 == word2) return 0

  const m: number = word1.length
  const n: number = word2.length
  
  let dp: number[][] = new Array(m + 1)
  for (let i = 0; i <= m; i++) {
    dp[i] = new Array(n + 1).fill(0)
  }

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0) dp[i][j] = j
      else if (j == 0) dp[i][j] = i
      else if (word1[i - 1] == word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], Math.min(dp[i][j - 1], dp[i - 1][j]))
      }
    }
  }
  return dp[m][n]
};

// Example 1:
// Input: word1 = "horse", word2 = "ros"
// Output: 3

// console.log(minDistance('horse', 'ros'));
// console.log(minDistance('jeje', 'jeje'));
// console.log(minDistance('horse', ''));
// console.log(minDistance('', ''));