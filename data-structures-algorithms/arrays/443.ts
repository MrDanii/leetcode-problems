function compress(chars: string[]): number {
  let countChar: number = 1 // variable to count same characters
  let charIndexStart: number = 0
  let charIndexEnd: number = 0
  let lastNewChar: string = chars[0]

  for (let i = 1; i < chars.length; i ++) {
    if (lastNewChar == chars[i]) {
      countChar++
      charIndexEnd = i
    } else {
      //* not equals means, that we must save current character,
      //* since we want to avoid use another array, we mutate original array, thats why we'll modify index in our for loop (danger! dont try this at home)
      let tempStr = (countChar === 1) ? lastNewChar + "" : lastNewChar + countChar + ""
      let tempArr: string[] = (tempStr).split('')
      chars.splice(charIndexStart, countChar, ...tempArr) //! remember that splice mutates arrays
      //* dont forget to modify i, since we already modify our length
      i = charIndexStart + tempStr.length

      countChar = 1
      charIndexStart = charIndexEnd = i
      lastNewChar = chars[i]
    }

    if (i + 1 === chars.length) {
      let tempStr = (countChar === 1) ? lastNewChar + "" : lastNewChar + countChar + ""
      let tempArr: string[] = (tempStr).split('')
      chars.splice(charIndexStart, countChar, ...tempArr)
    }
  }

  return chars.length
};

// a8b2
// ["a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "c", "c"]
// ["a", "8", "b", "2", "c", "4"]

// console.log(compress(["a", "a", "a", "a", "b", "b"]))
// console.log(compress(["a", "a", "a", "a", "b"]))
console.log(compress(["z", "a", "a", "b", "b", "b", "z"]))
// console.log(compress(["a", "a", "a", "a", "a", "a", "a", "a", "b", "b", "c", "c", "c", "c"]))