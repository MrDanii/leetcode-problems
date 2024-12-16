type F = (x: number) => number;

function compose(functions: F[]): F {

  return function (x: number) {
    let curVal: number = x
    for (let i = functions.length - 1; i >= 0; i--) {
      curVal = functions[i](curVal)
    }
    return curVal
  }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */

// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
const myFunctions: F[] = [x => x + 1, x => x * x, x => 2 * x]
const x = 4
const fn = compose(myFunctions)
console.log(fn(4));