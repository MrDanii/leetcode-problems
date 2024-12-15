class StockSpanner {
  // we need monotonic decreasing stack, to keep smallest values on top
  monoDeckStack: { price: number, range: number }[]

  constructor() {
    this.monoDeckStack = []
  }

  next(price: number): number {
    let tempRange: number = 1

    while (this.monoDeckStack.length > 0 && this.monoDeckStack[this.monoDeckStack.length - 1].price <= price) {
      const {range: curRange} = this.monoDeckStack.pop()!
      tempRange += curRange
    }
    
    this.monoDeckStack.push({price, range: tempRange})
    return tempRange;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

// Example 1:
// Input
// ["StockSpanner", "next", "next", "next", "next", "next", "next", "next"]
// [[], [100], [80], [60], [70], [60], [75], [85]]
// Output
// [null, 1, 1, 1, 2, 1, 4, 6]

let stockSpanner: StockSpanner = new StockSpanner()
console.log(stockSpanner.next(100));
console.log(stockSpanner.next(80));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(70));
console.log(stockSpanner.next(60));
console.log(stockSpanner.next(75));
console.log(stockSpanner.next(85));