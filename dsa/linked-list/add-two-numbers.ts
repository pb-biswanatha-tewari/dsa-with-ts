/* 
question link: https://leetcode.com/problems/add-two-numbers/
time complexity: O(max(N,M)), space complexity: O(max(N,M))
intution: 
    1. Create a dummy node and a head node
    2. Traverse both the linked lists and add the values
    3. If the sum is greater than 10, add the carry to the next sum
    4. Return the next of the dummy node
    EDGE CASE: If the sum is greater than 10 and the linked list is at the end, add the carry as a new node
    NOTE: extracting num1 and num2 from the linked list is not necessary and not a good idea since sum of the num1 & num2 could be huge and must be stored in a variable
    NOTE: sum / 10 creates a floating point number, so use Math.floor(sum / 10) to get the carry
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let dummy = new ListNode()
    let head = dummy
    let carry = 0

    while(l1 || l2 || carry){
        let sum = carry

        if(l1){
            sum += l1.val
            l1 = l1.next
        }

        if(l2){
            sum += l2.val
            l2 = l2.next
        }

        const digit = sum % 10;
        carry = Math.floor(sum / 10);
        head.next = new ListNode(digit)
        head = head.next
    }

    return dummy.next
    
};