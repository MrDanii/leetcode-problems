class Trie {
  root: TrieNode
  constructor() {
    this.root = new TrieNode()
  }

  insert(word: string): void {
    let auxNode: TrieNode = this.root;

    for (let i = 0; i < word.length; i++) {
      const curChar = word.charAt(i)

      if (auxNode.children.get(curChar) == null) {
        auxNode.children.set(curChar, new TrieNode())
      }
      auxNode = auxNode.children.get(curChar)!
    }

    auxNode.isEnd = true
  }

  search(word: string): boolean {
    let auxNode: TrieNode = this.root

    for (let i = 0; i < word.length; i++) {
      const curChar = word.charAt(i)

      if (auxNode.children.get(curChar) == null) return false
      auxNode = auxNode.children.get(curChar)!
    }

    return auxNode.isEnd
  }

  startsWith(prefix: string): boolean {
    let auxNode: TrieNode = this.root

    for (let i = 0; i < prefix.length; i++) {
      const curChar = prefix.charAt(i)

      if (auxNode.children.get(curChar) == null) return false
      auxNode = auxNode.children.get(curChar)!
    }

    return true
  }
}

class TrieNode {
  children: Map<string, TrieNode>
  isEnd: boolean

  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEnd = false
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// Example 1:
// Input
// ["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
// [[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
// Output
// [null, null, true, false, true, null, true]

let obj = new Trie()
obj.insert("apple")
console.log(obj.search("apple"));
console.log(obj.search("app"));
console.log(obj.startsWith("app"));
obj.insert("app")
console.log(obj.search("app"));