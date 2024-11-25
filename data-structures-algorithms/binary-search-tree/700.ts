// Definition for a binary tree node.
class TreeNode10 {
  val: number
  left: TreeNode10 | null
  right: TreeNode10 | null
  constructor(val?: number, left?: TreeNode10 | null, right?: TreeNode10 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

// Iterative Solution
function searchBST2(root: TreeNode10 | null, val: number): TreeNode10 | null {
  while (root && root.val != val) {
    if (val < root.val) root = root = root.left
    else root = root.right
  }

  return root;
}

// Recursive Solution
function searchBST(root: TreeNode10 | null, val: number): TreeNode10 | null {
  const searchVal = (curNode: TreeNode10 | null, value: number) => {
    if (!curNode) return null
    if (curNode.val == val) return curNode

    // let leftSearch = searchVal(curNode.left, value)
    // let rightSearch = searchVal(curNode.right, value)
    let nodeSearch = (value < curNode.val) ? searchVal(curNode.left, value) : searchVal(curNode.right, value)

    // return (!!leftSearch) ? leftSearch : rightSearch
    return nodeSearch || null
  }

  let nodeVar: TreeNode10 | null = searchVal(root, val)
  return nodeVar
};

const treeNode: TreeNode10 = new TreeNode10(4)
treeNode.left = new TreeNode10(2)
treeNode.right = new TreeNode10(7)
treeNode.left.left = new TreeNode10(1)
treeNode.left.right = new TreeNode10(3)
treeNode.left.right.left = new TreeNode10(1)
treeNode.left.right.right = new TreeNode10(2)

console.log(searchBST(treeNode.left.right.right, 2));
console.log(searchBST(treeNode, 2));

// console.log(searchBST2(treeNode.left.right.right, 2));
// console.log(searchBST2(treeNode, 2));