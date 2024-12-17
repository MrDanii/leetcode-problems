type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Fn = (value: JSONValue) => number

function sortBy(arr: JSONValue[], fn: Fn): JSONValue[] {
  arr.sort((a, b) => {
    return fn(a) - fn(b)
  })

  return arr
};

// Example 3:
// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
console.log(sortBy([[3, 4], [5, 2], [10, 1]], (x) => x![1]));