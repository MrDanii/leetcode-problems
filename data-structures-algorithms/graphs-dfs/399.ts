function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
  let hashmapEq: {} = {}
  let queriesValues: number[] = []

  equations.forEach(([dividend, divisor], indexEq) => {
    if (hashmapEq[dividend]) hashmapEq[dividend].push([divisor, values[indexEq]])
    else hashmapEq[dividend] = [[divisor, values[indexEq]]]

    if (hashmapEq[divisor]) hashmapEq[divisor].push([dividend, (1 / values[indexEq])])
    else hashmapEq[divisor] = [[dividend, (1 / values[indexEq])]]
  })

  // console.log(hashmapEq);
  queries.forEach(([curDividend, curDivisor], queriesIndex) => {
    if (!hashmapEq[curDividend] || !hashmapEq[curDivisor]) {
      queriesValues.push(-1)  // if variable is not in our hashmap, it means that it can't be solved
    } else if (curDividend == curDivisor) {
      queriesValues.push(1) // same variables divided by themselves give us 1
    } else {
      
      // let multiplier: number = 1
      let varsVisited: string[] = [] // we'll start searching from dividend
      
      // The mision here is to find the current "divisor" (recursively)
      const verifyVar = (currentVar: string, curMultiplier: number) => {
        if (varsVisited.includes(currentVar)) return
        varsVisited.push(currentVar)

        for (let i = 0; i < hashmapEq[currentVar].length; i++) {
          const [tempVar, res] = hashmapEq[currentVar][i]
          // with this condition we avoid to check same variables
          if (!varsVisited.includes(tempVar)) {
            if (tempVar === curDivisor) {
              // queriesValues.push(curMultiplier * res)
              queriesValues[queriesIndex] = curMultiplier * res
              break;
            }
            verifyVar(tempVar, (curMultiplier * res))
          }
        }
      }

      verifyVar(curDividend, 1)
      if (!queriesValues[queriesIndex]) queriesValues[queriesIndex] = -1
    }
  })

  return queriesValues
};

// Input: equations = [["a","b"],["b","c"]], values = [2.0,3.0], queries = [["a","c"],["b","a"],["a","e"],["a","a"],["x","x"]]
// Output: [6.00000,0.50000,-1.00000,1.00000,-1.00000]

let equations = [["a", "b"], ["b", "c"], ["m", "n"]]
let values = [2.0, 3.0, 4.0]
let queries = [["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"]]
// queries = [["a", "c"], ["a", "m"]]
// console.log(calcEquation(equations, values, queries));

// Example 2:
// Input: equations = [["a","b"],["b","c"],["bc","cd"]], values = [1.5,2.5,5.0], queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
// Output: [3.75000,0.40000,5.00000,0.20000]

equations = [["a","b"],["b","c"],["bc","cd"]]
values = [1.5,2.5,5.0]
queries = [["a","c"],["c","b"],["bc","cd"],["cd","bc"]]
queries = [["a","bc"]]
console.log(calcEquation(equations, values, queries));

// Example 3:
// Input: equations = [["a","b"]], values = [0.5], queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// Output: [0.50000,2.00000,-1.00000,-1.00000]

equations = [["a","b"]]
values = [0.5]
queries = [["a","b"],["b","a"],["a","c"],["x","y"]]
// console.log(calcEquation(equations, values, queries));

// Testcase: 11
equations = [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]]
values = [3.0,4.0,5.0,6.0]
queries = [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]
// console.log(calcEquation(equations, values, queries));
