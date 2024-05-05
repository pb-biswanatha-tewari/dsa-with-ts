/* 
question link: https://leetcode.com/problems/merge-two-sorted-lists/
time complexity: O(N) best case
intution: 1. Brute force: insert the values from both the list into an array, then make a new list out of the sorted array
          2. create a new list, and keep inserting the smaller value from the heads of the two list
*/

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let mergedList: ListNode = new ListNode();
  let head = mergedList;

  while (list1 != null && list2 != null) {
    if (list1.val < list2.val) {
      mergedList.next = new ListNode(list1.val, null);
      list1 = list1.next;
    } else {
      mergedList.next = new ListNode(list2.val, null);
      list2 = list2.next;
    }

    mergedList = mergedList.next;
  }

  while (list1 != null) {
    mergedList.next = new ListNode(list1.val, null);
    list1 = list1.next;
    mergedList = mergedList.next;
  }

  while (list2 != null) {
    mergedList.next = new ListNode(list2.val, null);
    list2 = list2.next;
    mergedList = mergedList.next;
  }

  return head.next;
}
