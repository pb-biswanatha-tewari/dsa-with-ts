/* 
question link: https://leetcode.com/problems/linked-list-cycle-ii/
time complexity: O(N), space complexity: O(1)
intution: 
    1. Use Floyd algo, one slow pointer and one twice as fast header, if it is a cycle, eventually they will meet
    2. Once they meet, move one pointer to the head and keep the other pointer at the meeting / collision point
    3. Move both the pointers one step at a time, they will meet at the start of the cycle
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

function detectCycle(head: ListNode | null): ListNode | null {

    let fast = head;
    let slow = head;
    let isCyclic = false;

    while(fast && fast.next && slow){
        fast = fast.next.next
        slow = slow.next

        if(fast === slow) {
            isCyclic = true;
            break;
        }
    }

    if(!isCyclic) return null

    slow = head;

    while(slow !== fast){
        // @ts-ignore
        fast = fast.next
        // @ts-ignore
        slow = slow.next
    }

    return slow
    
};