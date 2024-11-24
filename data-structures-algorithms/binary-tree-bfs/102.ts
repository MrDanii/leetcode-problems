// Definition for a binary tree node.
class TreeNode7 {
    val: number
    left: TreeNode7 | null
    right: TreeNode7 | null
    constructor(val?: number, left?: TreeNode7 | null, right?: TreeNode7 | null) {
        this.val = (val===undefined ? 0 : val)
        this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}


function levelOrder(root: TreeNode7 | null): number[][] {
  let resultArray: [number][] = []

  // We are creating an array an then store it in our resultArray
  const buildSubArr = (curNode: TreeNode7 | null, indexLevel: number) => {
    if (!curNode) return

    if (!resultArray[indexLevel]) resultArray[indexLevel] = [curNode.val]
    else resultArray[indexLevel].push(curNode.val)

    buildSubArr(curNode.left, indexLevel + 1)
    buildSubArr(curNode.right, indexLevel + 1)
  }

  buildSubArr(root, 0)

  return resultArray;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[9,20],[15,7]]

let treeNode = new TreeNode7(3)
treeNode.left = new TreeNode7(9)
treeNode.right = new TreeNode7(20)
treeNode.left.left = new TreeNode7(2)
treeNode.left.right = new TreeNode7(4)
treeNode.right.left = new TreeNode7(15)
treeNode.right.right = new TreeNode7(7)

console.log(levelOrder(treeNode));
