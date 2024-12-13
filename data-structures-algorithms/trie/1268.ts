function suggestedProducts(products: string[], searchWord: string): string[][] {
  let trie2: Trie = new Trie()
  let suggestedProducts: string[][] = new Array(searchWord.length)
  for (let i = 0; i < suggestedProducts.length; i++) {
    suggestedProducts[i] = []
  }
  // we can start sorting to avoid sorting every time we search
  products.sort()

  // Products insertion in a Trie
  for (let i = 0; i < products.length; i++) {
    trie2.insert(products[i])
  }

  // Searching suggestion by characters
  let curSearchWord: string = ''
  for (let i = 0; i < searchWord.length; i++) {
    curSearchWord += searchWord.charAt(i)
    let searchRes = trie2.getPossibleWords(trie2.getPrefixNode(curSearchWord))
    
    suggestedProducts[i].push(...searchRes.slice(0, 3))
  }

  return suggestedProducts
};

class Trie {
  root: TrieNode

  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string) {
    let auxTrieNode: TrieNode = this.root

    for (let i = 0; i < word.length; i++) {
      const curChar: string = word.charAt(i)

      if (auxTrieNode.children.get(curChar) == null) {
        auxTrieNode.children.set(curChar, new TrieNode())
      }
      auxTrieNode = auxTrieNode.children.get(curChar)!
    }
    auxTrieNode.isEnd = true
  }

  getPrefixNode(word: string): { trieNode: TrieNode | null, curCharacters: string } {
    let auxTrieNode: TrieNode = this.root
    let curCharacters: string = ''

    for (let i = 0; i < word.length; i++) {
      const curChar: string = word.charAt(i)
      curCharacters += curChar

      if (auxTrieNode.children.get(curChar) == null) {
        return { trieNode: null, curCharacters }
      }
      auxTrieNode = auxTrieNode.children.get(curChar)!
    }
    return { trieNode: auxTrieNode, curCharacters }
  }

  getPossibleWords(nodeOb: { trieNode: TrieNode | null, curCharacters: string }): string[] {
    const { trieNode, curCharacters } = nodeOb
    if (trieNode == null) return []

    // let possibleWords: string[] = trieNode.isEnd ? [curCharacters] : []
    let possibleWords: string[] = []

    const traverseTrieNode = (currentTrieNode: TrieNode, newCharacters: string) => {
      if (!currentTrieNode) { return }
      if (currentTrieNode.isEnd) {
        possibleWords.push(newCharacters)
      }

      currentTrieNode.children.forEach((myTrieNode, key) => {
        traverseTrieNode(myTrieNode, (newCharacters + key))
      })
    }

    traverseTrieNode(trieNode, curCharacters)
    return possibleWords
  }
}

class TrieNode {
  children: Map<string, TrieNode>
  isEnd: boolean

  constructor() {
    this.children = new Map<string, TrieNode>()
    this.isEnd = false
  }
}

// Example 1:
// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [["mobile","moneypot","monitor"],["mobile","moneypot","monitor"],["mouse","mousepad"],["mouse","mousepad"],["mouse","mousepad"]]
console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"));