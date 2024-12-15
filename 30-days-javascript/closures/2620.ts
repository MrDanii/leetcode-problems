function createCounter(n: number): () => number {
  return () => n++
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */

const counter = createCounter(10)
console.log(counter());
console.log(counter());
console.log(counter());