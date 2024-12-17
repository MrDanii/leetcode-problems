type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | JSONValue[]

function isEmpty(obj: Obj): boolean {
  if (Array.isArray(obj)) {
    for (const curOb of obj) { return false }
  } else {
    for (const curOb in obj) { return false }
  }
  return true
};

// * more efficient
// function isEmpty(obj: Obj): boolean {
//   for (_ in obj) {
//       return false;
//   }
//   return  true;
// };

// isEmpty([1,2,3])
// isEmpty([])
console.log(isEmpty([1, 2, 3]));
console.log(isEmpty([]));
console.log(isEmpty({ "hi1": 1, "hi2": 2, "hi3": 3 }));
console.log(isEmpty({}));
// isEmpty({"hola": 1})