function mergeAlternately(word1: string, word2: string): string {
  const isWord1Smaller: boolean = word1.length <= word2.length
  const smallestLength = isWord1Smaller ? word1.length : word2.length

  let mergedWord = ""
  for (let i = 0; i < smallestLength; i++) {
    mergedWord += word1.charAt(i) + word2.charAt(i)
  }
  mergedWord += isWord1Smaller ? word2.substring(smallestLength, word2.length) : word1.substring(smallestLength, word1.length)

  return mergedWord
};

// Time complexity: O(m + n)
// Space complexity: O(m + n)

// tests
// console.log(mergeAlternately("abc", "pqr"))
// console.log(mergeAlternately("ab", "pqrs"))
// console.log(mergeAlternately("abcd", "pq"))