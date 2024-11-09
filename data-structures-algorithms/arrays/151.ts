function reverseWords(s: string): string {
  s = s.trim()
  s = s.replace(/[ ]+/g, ' ')

  const words: string[] = s.split(" ")
  let newString: string = ''

  for (let i = words.length - 1; i >= 0; i--) {
    newString += words[i] + ' '
  }

  return newString.trim()
};

// time complexity: O(n)
// space complexity: O(m + n)

// console.log(reverseWords("the sky is blue"))
// console.log(reverseWords("  hello world  "))
// console.log(reverseWords("a good   example"))