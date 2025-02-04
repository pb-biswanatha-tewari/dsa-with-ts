/* 
question link: https://leetcode.com/problems/palindrome-linked-list/
time complexity: O(N), space complexity: O(1)
intution: 
    1. Brute force T: O(2N), S: O(N).
        a. Traverse the linked list and store the values in an array
        b. Traverse the linked list again and compare the values with the array in reverse order
    2. Better approach T: O(N), S: O(1)
        a. Reverse the second half of the linked list
        b. Traverse both the linked lists and compare the nodes
        c. If the list is odd, ignore the middle element
        EDGE CASE: if length of the linked list is 1, return true
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

function reverse(head: ListNode): ListNode {
    let current = head;
    let prev = null;
    let next = null;

    while(current){
        next = current.next
        current.next = prev;

        prev = current;
        current = next as ListNode;
        next = null;
    }

    return prev as ListNode
}

function isPalindrome(head: ListNode | null): boolean {
    let len = 0;
    let temp = head;

    while(temp){
        len++;
        temp = temp.next;
    }

    if(len === 1) return true // EDGE CASE

    const nextList = Math.floor(len / 2)

    temp = head;
    let count = 0;
    let l1, l2;

    while(temp && count < nextList - 1){
        temp = temp.next as ListNode;
        count++;
    }

    // @ts-ignore
    const secondListHead = len % 2 === 0 ? temp.next : temp.next?.next; // if the the length is odd, we ignore the middle element
    // @ts-ignore
    temp.next = null
    l1 = head;
    l2 = reverse(secondListHead as ListNode);

    

    while(l1 && l2){
        if(l1.val !== l2.val) return false

        l1 = l1.next;
        l2 = l2.next
    }

    return true
};