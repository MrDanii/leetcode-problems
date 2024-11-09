function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let greatestCandies: boolean[] = []
  const mostCandies: number = Math.max(...candies)
  
  for (const kidCandies of candies) {
    let hasGreatesCandies: boolean = kidCandies + extraCandies >= mostCandies
    greatestCandies.push(hasGreatesCandies)
  }
  return greatestCandies
};

console.log(kidsWithCandies([2,3,5,1,3], 3))
console.log(kidsWithCandies([4,2,1,1,2], 1))
console.log(kidsWithCandies([12,1,12], 10))