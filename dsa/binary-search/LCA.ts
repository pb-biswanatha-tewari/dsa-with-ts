/* 
question link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
time complexity: O(H -> height of the tree)
intution: Take advantage of the fact that it is a BST, 
            if the target numbers are lesser than the root, search the left sub tree
            if the target numbers are greater than the root, search the right sub tree
            else root is the LCA
*/

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode,
  q: TreeNode
): TreeNode | null {
  if (!root) return null;

  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);

  return root;
}
