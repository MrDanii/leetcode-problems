// Bottom-Up (Iterative solution)
// *Not mine but very elegant
// * efficient
function maxProfitIterative(prices: number[], fee: number): number {
  let profit = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }
    else if (prices[i] > minPrice + fee) {
      profit += prices[i] - minPrice - fee;
      minPrice = prices[i] - fee;
    }
  }
  return profit
};
// Example 1:
// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8

// Top-Down (recursive solution Memo)
function maxProfitRecursive(prices: number[], fee: number): number {

  const qtyPrices: number = prices.length
  // position "0" for buy and position "1" for sell
  let profitsToCalculate: number[][] = new Array(qtyPrices)
  for (let i = 0; i < qtyPrices; i++) {
    profitsToCalculate[i] = new Array(2).fill(-1)
  }

  const manageStocks = (areWeBuying: boolean, indexPrices: number, dp: number[][]): number => {

    if (indexPrices >= prices.length) return 0
    if (dp[indexPrices][areWeBuying ? 0 : 1] !== -1) {
      return dp[indexPrices][areWeBuying ? 0 : 1]
    }

    // We have two options 
    // 1.- "buy/sell" and go to next price
    // 2.- or "skip action" and go to next price
    let buyStock = 0, sellStock = 0, skipAction = 0
    if (areWeBuying) {
      buyStock = - prices[indexPrices]
        + manageStocks(!areWeBuying, indexPrices + 1, dp)
    } else {
      sellStock = prices[indexPrices] - fee
        + manageStocks(!areWeBuying, indexPrices + 1, dp)
    }

    // Skip action
    skipAction = manageStocks(areWeBuying, indexPrices + 1, dp)

    return dp[indexPrices][areWeBuying ? 0 : 1] =
      Math.max(buyStock, sellStock, skipAction)
  }

  return manageStocks(true, 0, profitsToCalculate)
};

// Example 1:
// Input: prices = [1,3,2,8,4,9], fee = 2
// Output: 8
// console.log(maxProfitRevursiveMemo([1, 3, 2, 8, 4, 9], 2));


// Example 2:
// Input: prices = [1,3,7,5,10,3], fee = 3
// Output: 6
console.log(maxProfitRecursive([1, 3, 7, 5, 10, 3], 3));

// testcase x:
// Input: prices = [3,4,2,8,6,7,1,4,3,5,2,8], fee = 5
// Output: 3
// console.log(maxProfitRevursiveMemo([3,4,2,8,6,7,1,4,3,5,2,8], 5));
// console.log(maxProfit([3, 4, 2, 8, 6, 7, 1, 4, 3, 5, 2, 8], 5));
// console.log(maxProfitRecursive([3, 4, 2, 8, 6, 7, 1, 4, 3, 5, 2, 8], 5));
