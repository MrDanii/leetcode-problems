// Definition for a binary tree node.
class TreeNode11 {
  val: number
  left: TreeNode11 | null
  right: TreeNode11 | null
  constructor(val?: number, left?: TreeNode11 | null, right?: TreeNode11 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function deleteNode(root: TreeNode11 | null, key: number): TreeNode11 | null {
  if (!root) return null

  // searching node, and at the same time assign the new left or right node (respectively)
  if (key < root.val) root.left = deleteNode(root.left, key)
  else if (key > root.val) root.right = deleteNode(root.right, key)
  else {
    // we found "key" at this instance, we have 3 cases: 
    // 1- (node with only left node/s)
    // 2- (node with only right node/s)
    // 3- (node with left and right node/s)
    if (!root.right) return root.left
    else if (!root.left) return root.right
    else {
      // find the smallest node, starting from the right side of the current node
      let minNode = root.right
      while (minNode.left) {
        minNode = minNode.left
      }
      // now the smallest left goes to 
      minNode.left = root.left
      return root.right
    }
  }

  // Notice that we are returning the original root at the end
  return root
};

let treeNode: TreeNode11 | null = new TreeNode11(5)
treeNode.left = new TreeNode11(3)
treeNode.right = new TreeNode11(6)
treeNode.left.left = new TreeNode11(2)
treeNode.left.right = new TreeNode11(4)
treeNode.right.right = new TreeNode11(7)

console.log(deleteNode(treeNode, 3));