// Bottom-Up solution (iterative way)
// * Most efficient
function minCostClimbingStairs2(cost: number[]): number {
  const stepsQty: number = cost.length
  const dp: number[] = []   // we'll be saving the sum to ith staicase

  for (let i = 0; i < stepsQty; i++) {
    if (i < 2) {
      dp[i] = cost[i];
      continue;
    }
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2])
  }

  return Math.min(dp[stepsQty - 1], dp[stepsQty - 2])
}

// ! Not efficient
// Top-Down solution (recursive way)
function minCostClimbingStairs(cost: number[]): number {
  const stepsQty: number = cost.length
  const sumCosts: number[] = []

  const climbStairs = (step: number, curCost: number) => {
    if (step >= stepsQty - 2) {
      sumCosts.push(curCost)
    } else {
      climbStairs((step + 1), curCost + cost[step + 1])
      climbStairs((step + 2), curCost + cost[step + 2])
    }
  }

  climbStairs(0, cost[0])
  climbStairs(1, cost[1])

  return Math.min(...sumCosts)
};

// Example 1:
// Input: cost = [10,15,20]
// Output: 15
// console.log(minCostClimbingStairs([10,15,20]));

// Example 2:
// Input: cost = [1,100,1,1,1,100,1,1,100,1]
// Output: 6
// console.log(minCostClimbingStairs([1,100,1,1,1,100,1,1,100,1]));

console.log(minCostClimbingStairs2([10, 15, 20]));
console.log(minCostClimbingStairs2([1,100,1,1,1,100,1,1,100,1]));