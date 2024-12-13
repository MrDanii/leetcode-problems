import java.util.HashMap;
import java.util.Map;

public class PrefixTree {
  public static void main(String[] args) {
    Trie myTrie = new Trie();
    myTrie.insert("apple");
    System.out.println(myTrie.search("apple"));
    System.out.println(myTrie.search("app"));
    System.out.println(myTrie.startsWith("app"));
    myTrie.insert("app");
    System.out.println(myTrie.search("app"));
  }
}

class Trie {
  private TrieNode root;

  public Trie() {
    root = new TrieNode();
  }

  public void insert(String word) {
    TrieNode auxTrie = root;

    for (int i = 0; i < word.length(); i++) {
      char curChar = word.charAt(i);

      if (auxTrie.children.get(curChar) == null) {
        auxTrie.children.put(curChar, new TrieNode());
      }
      auxTrie = auxTrie.children.get(curChar);
    }

    auxTrie.isEnd = true;
    // root.children.forEach((key, value) -> System.out.println("key: " + key));
  }

  public boolean search(String word) {
    TrieNode auxTrie = root;

    for (int i = 0; i < word.length(); i++) {
      char curChar = word.charAt(i);
      if (auxTrie.children.get(curChar) == null)
        return false;
      auxTrie = auxTrie.children.get(curChar);
    }

    return auxTrie.isEnd;
  }

  public boolean startsWith(String prefix) {
    TrieNode auxTrie = root;

    for (int i = 0; i < prefix.length(); i++) {
      char curChar = prefix.charAt(i);

      if (auxTrie.children.get(curChar) == null)
        return false;
      auxTrie = auxTrie.children.get(curChar);
    }

    return true;
  }
}

final class TrieNode {
  public Map<Character, TrieNode> children;
  boolean isEnd;

  public TrieNode() {
    this.children = new HashMap<>();
    this.isEnd = false;
  }
}