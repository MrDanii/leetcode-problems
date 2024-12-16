type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };

function argumentsLength(...args: JSONValue[]): number {
  // console.log(typeof args, args);
  return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */

// Example 2:
// Input: args = [{}, null, "3"]
// Output: 3

// console.log(argumentsLength({}, null, "3", 3));