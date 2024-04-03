/* 
question link: https://leetcode.com/problems/linked-list-cycle/
time complexity: O(N) worst case
intution: 1. Use a map to store the values encountered, and while looping an exisiting value encounters, that's a cycle. Assumption: the list only contains unique values
          2. Use Floyd algo, one slow pointer and one twice as fast header, if it is a cycle, eventually they will meet
*/

function hasCycle(head: ListNode | null): boolean {
  let slowHead = head;
  let fastHead = head;
  let flag = false;

  while (slowHead && fastHead && fastHead.next) {
    slowHead = slowHead.next;
    fastHead = fastHead.next.next;

    if (slowHead == fastHead) {
      flag = true;
      break;
    }
  }

  return flag;
}
