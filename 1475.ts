// *Efficient solution monotocin min stack
function finalPrices2(prices: number[]): number[] {
  let monoMinStack: number[] = [] // we are storing indexes

  for (let i = 0; i < prices.length; i++) {
    while (monoMinStack.length > 0 && prices[i] <= prices[monoMinStack[monoMinStack.length - 1]]) {
      const curIndex: number = monoMinStack.pop()!
      prices[curIndex] -= prices[i]
    }
    monoMinStack.push(i)
  }

  return prices
}

// !Not efficient
function finalPrices(prices: number[]): number[] {
  let discount: number
  let curPrice: number

  for (let i = 0; i < prices.length; i++) {
    curPrice = prices[i]
    discount = 0
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] <= curPrice) {
        discount = prices[j]
        break;
      }
    }
    prices[i] = curPrice - discount
  }

  return prices
};

// Example 1:
// Input: prices = [8,4,6,2,3]
// Output: [4,2,4,2,3]
// console.log(finalPrices([8,4,6,2,3]));
// console.log(finalPrices2([8,4,6,2,3]));

let time1

time1 = performance.now()
console.log(finalPrices([
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
]));
console.log(`With nested for loops: ${Math.floor(performance.now() - time1)}`);

time1 = performance.now()
console.log(finalPrices2([
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
  8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,8,4,6,2,3,
]));
console.log(`With monotonic min stack: ${Math.floor(performance.now() - time1)}`);
