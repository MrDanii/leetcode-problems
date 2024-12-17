interface Array<T> {
  groupBy(fn: (item: T) => string): Record<string, T[]>
}

Array.prototype.groupBy = function (fn) {
  let result = {}
  
  for (const item of this) {
    const myKey = fn(item)
    // if (!result[myKey]) result[myKey] = []
    result[myKey] ||= []  // elegance
    result[myKey].push(item)
  }

  return result
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */