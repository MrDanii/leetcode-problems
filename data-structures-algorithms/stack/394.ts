function decodeString(s: string): string {
  const multipliersStack: number[] = []
  const charactersStack: string[] = []
  let currentString: string = ''
  let currentMultipler: number = 0

  for (let i = 0; i < s.length; i++) {
    let ch = s.charAt(i)
    // Regular expression for a single lowercase letter
    if (/^[a-z]+$/.test(ch)) {
      currentString += ch
    } else if (!isNaN(+ch)) {
      currentMultipler = currentMultipler * 10 + (+ch)  // "+ch" is casting to number
    } else if (ch == '[') {
      charactersStack.push(currentString)
      multipliersStack.push(currentMultipler)
      currentString = ''
      currentMultipler = 0
    } else if (ch == ']') {
      let prevCharacter = charactersStack.pop()!
      let prevMultiplier = multipliersStack.pop()!
      currentString = prevCharacter + currentString.repeat(prevMultiplier)
    }
  }

  return currentString
};

// console.log(decodeString('3[a]2[bc]'))  // aaabcbc
// console.log(decodeString('3[a2[c]]'))  // accaccacc
// console.log(decodeString('ab10[a2[c]]'))   // abaccaccaccaccaccaccaccaccaccacc
