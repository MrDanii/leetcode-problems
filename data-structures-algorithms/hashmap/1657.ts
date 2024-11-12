function closeStrings(word1: string, word2: string): boolean {
  if (word1.length != word2.length) return false
  
  let hashmap1: Map<string, number> = new Map<string, number>()
  let hashmap2: Map<string, number> = new Map<string, number>()
  let hashmapWatch: Map<string, number> = new Map<string, number>() // this hashmap it's to verify they both words have same characters

  // Creates hashmap for word1, with his frecuencies
  for (let i = 0; i < word1.length; i++) {
    let myChar = word1.charAt(i)
    let currentVal = (!hashmap1.get(myChar)) ? 1 : hashmap1.get(myChar)! + 1
    hashmap1.set(myChar, currentVal)
    hashmapWatch.set(myChar, 0)
  }

  // Creates hashmap for word2, with his frecuencies
  for (let i = 0; i < word2.length; i++) {
    let myChar = word2.charAt(i)
    let currentVal = (!hashmap2.get(myChar)) ? 1 : hashmap2.get(myChar)! + 1
    hashmap2.set(myChar, currentVal)
    hashmapWatch.set(myChar, 0)
  }

  // if sizes are different it means, that "word1" or "word2" have characters that the other does not have
  if (hashmap1.size != hashmapWatch.size) return false

  let hashmapFrecuencies1: Map<number, any> = new Map<number, any>()  // now we create a hashmap with frecuencies of each set of characters
  let hashmapFrecuencies2: Map<number, any> = new Map<number, any>()  // now we create a hashmap with frecuencies of each set of characters

  hashmap1.forEach((value) => {
    let timesFrecuencyAppears: number = (!hashmapFrecuencies1.get(value)) ? 1 : hashmapFrecuencies1.get(value) + 1
    hashmapFrecuencies1.set(value, timesFrecuencyAppears)
  })  // in this case we use the value as a key
  hashmap2.forEach((value) => {
    let timesFrecuencyAppears: number = (!hashmapFrecuencies2.get(value)) ? 1 : hashmapFrecuencies2.get(value) + 1
    hashmapFrecuencies2.set(value, timesFrecuencyAppears)
  })  // in this case we use the value as a key

  // check Frecuencies
  let doesFrecuenciesMatch: boolean = true
  hashmapFrecuencies1.forEach((value, key) => {
    if (hashmapFrecuencies2.get(key) != value) {
      doesFrecuenciesMatch = false
      return false
    }
  })

  return doesFrecuenciesMatch
};

console.log(closeStrings('abc', 'bca'))
console.log(closeStrings('a', 'aa'))
console.log(closeStrings('cabbba', 'abbccc'))
// console.log(closeStrings('baaccc', 'abbccc'))
// console.log(closeStrings('bacccc', 'abbccc'))
// console.log(closeStrings('uau', 'ssx'))
// console.log(closeStrings('abczz', 'abcxx'))
// console.log(closeStrings('aaabbbbccddeeeeefffff', 'aaaaabbcccdddeeeeffff'))
