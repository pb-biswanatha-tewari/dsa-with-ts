/* 
question link: https://leetcode.com/problems/middle-of-the-linked-list/
time complexity: O(N) best case
*/

function middleNode(head: ListNode | null): ListNode | null {
  let length = 0;
  let temp = head;

  while (temp) {
    length++;
    temp = temp.next;
  }

  let target = Math.floor(length / 2) + 1;
  let count = 0;

  while (count < target && head) {
    if (++count == target) return head;

    head = head.next;
  }

  return null;
}
