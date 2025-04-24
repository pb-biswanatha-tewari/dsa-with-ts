/* 
question link: https://leetcode.com/problems/rotate-list/
time complexity: O(N), space complexity: O(1)
intution: 
    1. Compute the length of the linked list and get the last node
    2. Optimize the rotation by using k % length (KEY TRICK), in-case K is greater than the length, like 10^9
    3. Find the new tail [i.e., kth element from the end: (n - k - 1)] and new head
    4. Break the link between the new tail and new head
    5. Attach the old tail to the old head
*/

function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head || !head.next || k === 0) return head; // Edge case handling

    // Step 1: Compute the length and get the last node
    let length = 1;
    let tail = head;
    while (tail.next) {
        tail = tail.next;
        length++;
    }

    // Step 2: Optimize k
    k = k % length; // KEY TRICK
    if (k === 0) return head; // No rotation needed

    // Step 3: Find the new tail (n - k - 1) and new head
    let newTail = head;
    for (let i = 0; i < length - k - 1; i++) {
        newTail = newTail.next as ListNode;
    }

    let newHead = newTail.next;
    newTail.next = null; // Break the link

    // Step 4: Attach the old tail to the old head
    tail.next = head;

    return newHead;
};