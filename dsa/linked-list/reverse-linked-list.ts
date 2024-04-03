/* 
question link: https://leetcode.com/problems/reverse-linked-list/
time complexity: O(N) best case
intution: 1. BF: use an array to store the values and then use the same array to create a new reversed linked list
          2. use prev, current and next logic
*/

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = prev;

    prev = current;
    current = next;
    next = null;
  }

  return prev;
}

// -- using recursion
// function reverseList(head: ListNode | null): ListNode | null {

//     if(!head) return null;
//     if(head && !head.next) return head;

//     const newHead = reverseList(head.next)
//     let iterator = newHead;

//     while(iterator && iterator.next){
//         iterator = iterator.next
//     }

//     head.next = null;
//     iterator.next = head;

//     return newHead
// };
