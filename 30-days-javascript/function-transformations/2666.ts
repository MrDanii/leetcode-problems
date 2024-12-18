type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type OnceFn = (...args: JSONValue[]) => JSONValue | undefined

function once(fn: Function): OnceFn {

  let called: boolean = false
  return function (...args) {
    if (!called) {
      called = true
      return fn(...args)
    }
    return undefined
  };
}

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

let fn = (a: number, b: number, c: number) => (a + b + c)
let onceFn = once(fn)

console.log(onceFn(1, 2, 3));
console.log(onceFn(2, 3, 6));
console.log(onceFn(2, 3, 6));
console.log(onceFn(2, 3, 6));
console.log(onceFn(2, 3, 6));