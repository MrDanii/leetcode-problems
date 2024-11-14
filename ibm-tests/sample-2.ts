/*
  2. given an integer, if 2 adjecent digit are both odd or even, we can do a swap for these digit.
  Like for 597683
  swap 5 and 9 -> 957683
  swap 5 and 7 -> 975683
  swap 6 and 8 -> 975863

  get largest number 975863
*/

function swapNumbers(num: number): number {
  let stack: string[] = []
  let currentString = num + ""
  let prevType: string = 'none'

  for (let char of currentString) {
    let currentType = (+char & 1) == 1 ? 'odd' : 'even'

    if (prevType != 'none' && prevType != currentType) {
      // let prevString = stack.pop()
      // currentString = prevString + currentString
      stack.push(currentString)
      currentString = char
      prevType = currentType
    } else if (prevType == currentType){
      currentString += char
      prevType = currentType
    }
  }

  console.log(stack);
  return 0
}

console.log(swapNumbers(597683));