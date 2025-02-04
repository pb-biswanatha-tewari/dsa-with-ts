/* 
question link: https://leetcode.com/problems/intersection-of-two-linked-lists/
time complexity: O(N + M), space complexity: O(1)
intution: 
    1. Brute force T: O(NM), S: O(1)
        a. Traverse the first linked list
        b. Traverse the second linked list (nested loop)
        c. Compare the nodes
    2. Better approach T: O(N+M), S: O(1)
        a. Traverse both the linked lists and get the length of both the linked lists
        b. Traverse the linked list with the greater length by the difference of the two lengths
        c. Traverse both the linked lists and compare the nodes
        d. Return the intersection node
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    let l1 = 0;
    let l2 = 0;
    let n1 = headA;
    let n2 = headB;

    while(n1){
        l1++;
        n1 = n1.next
    }

    while(n2){
        l2++;
        n2 = n2.next
    }

    let diff = Math.abs(l1 - l2)

    let bList = l1 > l2 ? headA : headB;
    let sList = l1 < l2 ? headA : headB;

    if(l1 === l2){ // edge case
        bList = headA
        sList = headB
    }

    while(diff){
        // @ts-ignore
        bList = bList.next
        diff--;
    }

    while(bList){
        if(bList === sList) return bList

        bList = bList.next
        // @ts-ignore
        sList = sList.next
    }

    return null
};