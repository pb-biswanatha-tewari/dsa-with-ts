/* 
question link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
time complexity: O(1), space complexity: O(1)
intution: 
    1. Copy the value of the next node to the current node
    2. Remove the next node by pointing the current node to the next of the next node
*/

function deleteNode(node: ListNode): void {
    const nextNode: ListNode = node.next as ListNode;

    node.val = nextNode.val
    node.next = nextNode.next
};