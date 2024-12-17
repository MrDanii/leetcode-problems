type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

//? Self note: falsy values include: 0, null, undefined, false, NaN, and ""
function compactObject(obj: Obj): Obj {
  if (Array.isArray(obj)) {
    // with obj.filter(Boolean) we are avoiding falsy values
    let mappedArr = obj.filter(Boolean).map((val) => {

      if (typeof val === 'object') {
        return compactObject(val!)
      }
      return val
    })
    return mappedArr
  }

  for (let [key, val] of Object.entries(obj)) {
    // if (val === 0 || val === null || val === undefined || val === false || val === '') delete obj[key]
    if (!val) {
      delete obj[key]
      continue
    }

    if (typeof val === 'object') {
      obj[key] = compactObject(val!)
    }
  }

  return obj
};

// Example 2:
// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}

let obj
// obj = {"a": null, "b": [false, 1]}
obj = [null, 0, 5, [0], [false, 16]]
console.log(compactObject(obj));