type Fn = (...params: number[]) => number

function memoize(fn: Fn): Fn {
  let cacheOb = {}

  return function (...args) {
    const key = JSON.stringify(args)
    
    // !Be careful with properties that have value 0, thats why we use Object.hasOwn(object, key)
    if (Object.hasOwn(cacheOb, key)) {
      return cacheOb[key]
    } else {
      const fnValue = fn(...args)
      cacheOb[key] = fnValue
      return fnValue
    }
  }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

let callCount = 0
const memoizedFn = memoize((a, b) => {
  callCount += 1;
  return a + b
})
console.log(memoizedFn(2,3));
console.log(memoizedFn(2,3));
console.log(callCount);
