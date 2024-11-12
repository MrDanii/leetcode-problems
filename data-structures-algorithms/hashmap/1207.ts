function uniqueOccurrences(arr: number[]): boolean {
  let myHashmap: Map<number, number> = new Map<number, number>()

  // we count every coincidence, en each value
  arr.forEach((value) => {
    let currentValue =  (!myHashmap.get(value)) ? 1 : myHashmap.get(value)! + 1
    myHashmap.set(value, currentValue)
  })

  // we create a new hashmap, with only the values, 
  // if length of both hashmaps are the same, this means we have unique ocurrences
  let ocurrencesHashmap: Map<number, any> = new Map<number, any>
  myHashmap.forEach((value, key) => ocurrencesHashmap.set(value, 0))  // note: we take value as a "key" and value in new hashmap does not matter

  return myHashmap.size == ocurrencesHashmap.size
};

// console.log(uniqueOccurrences([1,2,2,1,1,3]))
// console.log(uniqueOccurrences([1,2]))
// console.log(uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]))
// console.log(uniqueOccurrences([]))