type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type ArrayType = { "id": number } & Record<string, JSONValue>;

function join(arr1: ArrayType[], arr2: ArrayType[]): ArrayType[] {
  let hashmap = {}

  arr1.concat(arr2).forEach((item) => {
    const { id } = item
    if (Object.hasOwn(hashmap, id)) {
      // hashmap[id] = {...hashmap[id], ...item}
      Object.assign(hashmap[id], item)  // *more efficient, than spread operator
    } else {
      hashmap[id] = item
    }
  })

  return Object.values(hashmap)
};

// Example 2:
// Input: 
// arr1 = [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 3, "y": 6}
// ], 
// arr2 = [
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]
// Output: 
// [
//     {"id": 1, "x": 2, "y": 3},
//     {"id": 2, "x": 10, "y": 20},
//     {"id": 3, "x": 0, "y": 0}
// ]

let arr1: any = [
  { "id": 1, "x": 2, "y": 3, "z": 99 },
  { "id": 2, "x": 3, "y": 6 }
]
let arr2 = [
  { "id": 2, "x": 10, "y": 20 },
  { "id": 3, "x": 0, "y": 0 }
]

console.log(join(arr1, arr2));