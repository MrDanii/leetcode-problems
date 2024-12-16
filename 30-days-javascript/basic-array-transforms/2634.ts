type Fn = (n: number, i: number) => any

function filter(arr: number[], fn: Fn): number[] {
  const resArr: number[] = []

  for (let i = 0; i < arr.length; i++) {
    const curN: number = arr[i]
    if (fn(curN, i)) resArr.push(curN)
  }

  return resArr
};

// Example 1:
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]

const greaterThan10 = (n: number): boolean => (n > 10)
const myArr: number[] = [0,10,20,30]
console.log(filter(myArr,greaterThan10));