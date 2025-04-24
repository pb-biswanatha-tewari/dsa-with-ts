/* 
question link: https://leetcode.com/problems/copy-list-with-random-pointer/
time complexity: O(3N), space complexity: O(N)
intution: 
    1. Add copy nodes to the original lists (TRICK)
    2. Assign values to the random pointer of the copied nodes [the random pointer of the copied node is the next node of the original node's random pointer]
    3. Return the new list, after detaching the copied nodes from the original list
*/

class _Node {
    val: number
    next: _Node | null
    random: _Node | null

    constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}


function copyRandomList(head: _Node): _Node {
    if(!head) return head // edge case

    let temp = head;

    // add copy nodes to the original lists
    while(temp){
        // @ts-ignore
        const newNode = new _Node(temp.val, temp.next)
        temp.next = newNode
        // @ts-ignore
        temp = newNode.next
    }

    temp = head;

    // assign values to the random pointer of the copied nodes
    while(temp){
        // @ts-ignore
        temp.next.random = temp.random?.next || null
        // @ts-ignore
        temp = temp.next?.next || null
    }

    temp = head
    const newHead = temp.next

    // return the new list, after detaching the copied nodes from the original list
    while(temp){
        const copyNode = temp.next
        temp.next = copyNode?.next || null
        // @ts-ignore
        copyNode.next = copyNode.next?.next || null
        // @ts-ignore
        temp = temp.next 
    }

    // @ts-ignore
    return newHead
};