
function removeStars(s: string): string {
  let myStack: string[] = []

  for (let char of s) {
    if (char == '*') {
      myStack.pop()
    } else {
      myStack.push(char)
    }
  }

  return myStack.join('') // remember to call join() method with an empty string to avoid "," character
};

console.log(removeStars("leet**cod*e"))