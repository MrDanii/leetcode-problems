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


function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  let arrRoot1: number[] = []
  let arrRoot2: number[] = []
  
  getLeaves(root1, arrRoot1)
  getLeaves(root2, arrRoot2)

  if (arrRoot1.length != arrRoot2.length) return false  
  let isLeafSimilar: boolean = true
  // comparing each element of leafs from tree #1 with leafs from tree #2
  for (let i = 0; i < arrRoot1.length; i++){
    if (arrRoot1[i] != arrRoot2[i]) {
      isLeafSimilar = false
      break
    }
  }
   
  return isLeafSimilar
};

function getLeaves(root: TreeNode | null, arr: number[]) {
  if (root == null) return
  console.log(root.val);
  if (root.left == null && root.right == null) {
    arr.push(root.val)
    return
  }
  getLeaves(root.left, arr)
  getLeaves(root.right, arr)
}

// const treeNode1: TreeNode | null = new TreeNode(3)
// treeNode1.left = new TreeNode(5)
// treeNode1.right = new TreeNode(1)
// treeNode1.left.left = new TreeNode(6)
// treeNode1.left.right = new TreeNode(2)
// treeNode1.left.right.left = new TreeNode(7)
// treeNode1.left.right.right = new TreeNode(4)
// treeNode1.right.left = new TreeNode(9)
// treeNode1.right.right = new TreeNode(8)

// // const auxArr1: number[] = []
// // // console.log(getLeaves(treeNode1, auxArr1));
// // // console.log(auxArr1);

// const treeNode2: TreeNode | null = new TreeNode(3)
// treeNode2.left = new TreeNode(5)
// treeNode2.right = new TreeNode(1)
// treeNode2.left.left = new TreeNode(6)
// treeNode2.left.right = new TreeNode(7)
// treeNode2.right.left = new TreeNode(4)
// treeNode2.right.right = new TreeNode(2)
// treeNode2.right.right.left = new TreeNode(9)
// treeNode2.right.right.right = new TreeNode(8)

// // console.log(treeNode2);

// console.log(leafSimilar(treeNode1, treeNode2));