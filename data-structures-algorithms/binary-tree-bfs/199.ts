// Definition for a binary tree node.
class TreeNode8 {
  val: number
  left: TreeNode8 | null
  right: TreeNode8 | null
  constructor(val?: number, left?: TreeNode8 | null, right?: TreeNode8 | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}


function rightSideView(root: TreeNode8 | null): number[] {
  let result: number[] = []

  const buildArr = (curNode: TreeNode8 | null, indexLevel: number) => {
    if (!curNode) return;

    result[indexLevel] = curNode.val

    // we start with left node, and then with the right node, 
    // so we are constanly overwriting the assignation 
    // (( the assignation above this comment )): ``` result[levelIndex] = curNode.val ```
    buildArr(curNode.left, indexLevel + 1)
    buildArr(curNode.right, indexLevel + 1)
  }

  buildArr(root, 0) // remember we start on indexLevel "0"
  return result
};

// Input: root = [1,2,3,null,5,6,null,4]
// Output: [1,3,6,4]

const treeNode: TreeNode8 | null = new TreeNode8(1)
treeNode.left = new TreeNode8(2)
treeNode.right = new TreeNode8(3)
treeNode.left.right = new TreeNode8(5)
treeNode.right.left = new TreeNode8(6)
treeNode.left.right.left = new TreeNode8(4)
console.log(rightSideView(treeNode));

// Input: root = [1,2,3,null,5,null,4]
// Output: [1,3,4]
const treeNode2: TreeNode8 | null = new TreeNode8(1)
treeNode2.left = new TreeNode8(2)
treeNode2.right = new TreeNode8(3)
treeNode2.left.right = new TreeNode8(5)
treeNode2.right.right = new TreeNode8(4)
console.log(rightSideView(treeNode2));

// Input: root = [1,2,3,4,null,null,null,5]
// Output: [1,3,4,5]
const treeNode3: TreeNode8 | null = new TreeNode8(1)
treeNode3.left = new TreeNode8(2)
treeNode3.right = new TreeNode8(3)
treeNode3.left.left = new TreeNode8(4)
treeNode3.left.left.left = new TreeNode8(5)
console.log(rightSideView(treeNode3));

// Input: root = [1,null,3]
// Output: [1,3]
const treeNode4: TreeNode8 | null = new TreeNode8(1)
treeNode4.right = new TreeNode8(3)
console.log(rightSideView(treeNode4));

// Input: root = []
// Output: []
const treeNode5: TreeNode8 | null = null
console.log(rightSideView(treeNode5));