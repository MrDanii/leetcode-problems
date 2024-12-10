function longestCommonSubsequenceIterative(text1: string, text2: string): number {
  let dp: number[] = Array(text1.length + 1).fill(0)
  for (let j = text2.length - 1; j >= 0; j--) {
    const auxDp: number[] = Array(text1.length + 1).fill(0)
    for (let i = text1.length - 1; i >= 0; i--) {
      if (text1[i] == text2[j]) {
        auxDp[i] = 1 + dp[i + 1]
      } else {
        auxDp[i] = Math.max(auxDp[i+1], dp[i])
      }
    }
    dp = auxDp  // we are saving current values to compare with next rows
  }

  return dp[0]
}

// Top-Down (Recursive solution)
function longestCommonSubsequence(text1: string, text2: string): number {
  const searchLongestSubsequence = (indexT1: number, indexT2: number): number => {
    if (indexT1 > text1.length - 1 || indexT2 > text2.length - 1) {
      return 0
    }
    if (text1[indexT1] == text2[indexT2]) return (1 + searchLongestSubsequence(indexT1 + 1, indexT2 + 1))
    return Math.max(searchLongestSubsequence(indexT1 + 1, indexT2))
  }

  return searchLongestSubsequence(0, 0)
};

// Example 1:
// Input: text1 = "abcde", text2 = "ace"
// Output: 3
// Explanation: The longest common subsequence is "ace" and its length is 3.
console.log(longestCommonSubsequenceIterative("abcde", "ace"));

// Testcase 24
// Input: text1 = ""abcba"" text2 = ""abcbcba""
// Output: 6
// console.log(longestCommonSubsequenceIterative("abcba", "abcbcba"));

// console.log(longestCommonSubsequenceIterative("nematode knowledge", "empty bottle"));