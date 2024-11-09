function reverseVowels(s: string): string {
  let reversedVowels: string = ''

  for (let i = s.length - 1; i >= 0; i--) {
    if (isVowel(s.charAt(i))) {
      reversedVowels += s.charAt(i)
    }
  }

  let newStr = ''
  let currentVowelsIndex = 0
  
  for (let i = 0; i < s.length; i++) {
    if (isVowel(s.charAt(i))) {
      newStr += reversedVowels.charAt(currentVowelsIndex)
      currentVowelsIndex++
    } else {
      newStr += s.charAt(i)
    }
  }

  return newStr
};

const isVowel = (char: string): boolean => {
  if (
    char == "a" || char == "e" || char == "i" || char == "o" || char == "u" ||
    char == "A" || char == "E" || char == "I" || char == "O" || char == "U"
  ){
    return true
  }
  return false
}

console.log(reverseVowels("IceCreAm"))
console.log(reverseVowels("leetcode"))