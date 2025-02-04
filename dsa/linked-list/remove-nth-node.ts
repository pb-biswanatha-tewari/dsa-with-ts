/* 
question link: https://leetcode.com/problems/remove-nth-node-from-end-of-list/
time complexity: O(N), space complexity: O(1)
intution: 
    1. Brute force T: O(2N), S: O(1).
        a. Count the length of the linked list
        b. Traverse the linked list again and remove the Nth element
    2. Better approach T: O(N), S: O(1)
        a. Use two pointers, fast and slow
        b. Move the fast pointer n times
        c. Move both the pointers until the fast pointer reaches the end
        d. Now the slow pointer is at the Nth position from the end
        e. Remove the element
        EDGE CASE: If the element to be removed is the first element, return head.next (n === length of the linked list)
*/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let fast = head;
    let slow = head;
    let count = 0;

    while(fast){
        if(count < n){
            fast = fast.next;
            count++;

            if(!fast) return head?.next ?? null // edge case, removing the first element of the linked list
            continue;
        }

        if(fast.next){
            fast = fast.next;
            slow = slow?.next ?? null;
        } else {
            // @ts-ignore
            slow.next = slow?.next?.next;
            break;
        }
    }

    return head;
};