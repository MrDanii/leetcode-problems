const hashmapDigits = {
  "2": "abc",
  "3": "def",
  "4": "ghi",
  "5": "jkl",
  "6": "mno",
  "7": "pqrs",
  "8": "tuv",
  "9": "wxyz",
}

function letterCombinations(digits: string): string[] {
  if (digits.length <= 0) return []   // special case
  const combinationsArray: string[] = []   // array with all possible combination

  const buildCombinations = (curCombination: string, curDigits: string): void => {
    if (curDigits.length == 0) {
      combinationsArray.push(curCombination)
    } else {
      const myCharacters: string = hashmapDigits[curDigits[0]]
      for (const letter of myCharacters) {
        buildCombinations(curCombination + letter, curDigits.slice(1))
      }
    }
  }

  buildCombinations('', digits)
  return combinationsArray
};

// Example 1:
// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]

console.log(letterCombinations("23"));

// Example 2:
// Input: digits = ""
// Output: []
console.log(letterCombinations(""));

// Example 3:
// Input: digits = "2"
// Output: ["a","b","c"]
console.log(letterCombinations("2"));

console.log(letterCombinations("239"));