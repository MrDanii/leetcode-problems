// With Arrays
function canConstruct(ransomNote: string, magazine: string): boolean {
  let currentChar: string
  for (let i = 0; i < ransomNote.length; i++) {
    currentChar = ransomNote.charAt(i)
    const charFound = magazine.indexOf(currentChar)
    if ( charFound < 0) {
      return false
    }
    magazine = magazine.slice(0, charFound) + magazine.slice(charFound + 1)
  }

  return true
};
// time complexity O(n*m)
// Space complexity O(m)

// With HashMaps
function canConstruct2(ransomNote: string, magazine: string): boolean {
  
  // creating our hashmap in variable called "magazineLetters"
  let magazineLetters = {}
  for (let i = 0; i < magazine.length; i++) {
    let currentChar = magazine[i]

    let currentCount = magazineLetters[currentChar+""] ?? 0
    magazineLetters[currentChar+""] = currentCount + 1
  }

  // building RansomNote with our recently created hashmap "magazineLetters"
  for (let j = 0; j < ransomNote.length; j++) {
    let currentChar = ransomNote[j]

    let currentCount = magazineLetters[currentChar+""] ?? 0
    if (currentCount === 0) return false
    magazineLetters[currentChar+""] = currentCount - 1
  }

  return true
}
// Time complexity O(m)
// Space complexity O(1) // it is constant, because the maximum amount of different character that we can receive are 26
