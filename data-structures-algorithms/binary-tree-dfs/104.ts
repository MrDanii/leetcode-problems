
// Definition for a binary tree node.
class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function maxDepth(root: TreeNode | null): number {
  if (root == null) return 0
  console.log(root.left);
  console.log(root.right);
  let leftNodeDepth: number = 1 + maxDepth(root.left)
  let rightNodeDepth: number = 1 + maxDepth(root.right)
  console.log(`left (${leftNodeDepth}) -- right (${rightNodeDepth})`);
  return (leftNodeDepth >= rightNodeDepth) ? leftNodeDepth : rightNodeDepth;
};

// Example #1:
//      3
//   9      20
//       15   7

// const treeNode5: TreeNode | null = new TreeNode(7, null, null)
// const treeNode4: TreeNode | null = new TreeNode(15, null, null)
// const treeNode3: TreeNode | null = new TreeNode(20, treeNode4, treeNode5)
// const treeNode2: TreeNode | null = new TreeNode(9, null, null)
// const treeNode1: TreeNode | null = new TreeNode(3, treeNode2, treeNode3)

// console.log(maxDepth(treeNode1));

// Example #2:
        //       0
        //   1       2       
        // 3   4    5  6

// PreOrder (root, left, right): [0,1,3,4,2,5,6]
// InOrder (left, root, right): [3,1,4,0,5,2,6]
// PostOrder (left, right, root): [3,4,5,6,1,2,0]