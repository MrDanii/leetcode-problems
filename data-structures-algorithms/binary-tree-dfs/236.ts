// Definition for a binary tree node.
class TreeNode6 {
  val: number
  left: TreeNode6 | null
  right: TreeNode6 | null
  constructor(val?: number, left?: TreeNode6 | null, right?: TreeNode6 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function lowestCommonAncestor(root: TreeNode6 | null, p: TreeNode6, q: TreeNode6): TreeNode6 | null {
  if (root === null) return null;

  // Binary-tree Depth first search
  const leftNodePQ = lowestCommonAncestor(root.left, p, q);
  const rightNodePQ = lowestCommonAncestor(root.right, p, q);
  //? console.log(`root: ${root.val} -- p: ${p.val} -- q: ${q.val}`);

  // We found "p" and "q" nodes. since its Lowest Common Ancestor (LCA) the current root its our LCA
  if ((leftNodePQ && rightNodePQ) || (root === p || root === q))
    return root;

  // this propagates it upward, we only have one node found in this instance
  return (!!leftNodePQ) ? leftNodePQ : rightNodePQ;
};

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
// Output: 3

const treeNode: TreeNode6 | null = new TreeNode6(3)
treeNode.left = new TreeNode6(5)
treeNode.right = new TreeNode6(1)
treeNode.left.left = new TreeNode6(6)
treeNode.left.right = new TreeNode6(2)
treeNode.right.left = new TreeNode6(0)
treeNode.right.right = new TreeNode6(8)
treeNode.left.right.left = new TreeNode6(7)
treeNode.left.right.right = new TreeNode6(4)

console.log(lowestCommonAncestor(treeNode, treeNode.left, treeNode.right));
