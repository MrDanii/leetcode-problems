function fizzBuzz(n: number): string[] {
  let stringArray: string[] = []
  
  for (let i = 1; i <= n; i++) {
    let currString = ""
    
    if (i % 3 === 0) {
      currString += "Fizz"
    } 
    if (i % 5 === 0) {
      currString += "Buzz"
    } 
    if (currString === "") {
      currString = `${i}`
    }

    stringArray.push(currString)
  }
  
  return stringArray
};