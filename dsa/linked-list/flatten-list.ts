// @ts-nocheck
/* 
question link: https://www.geeksforgeeks.org/problems/flattening-a-linked-list/1
time complexity: O(N * (2M)) [N -> length of the vertical list, M -> length of the horizontal list, 2M -> for merging list], space complexity: O(1)
intution: 
    1. Use recursion to flatten the linked list
    2. Merge the head with the next flatten linked list
    3. Repeat the process until all linked lists are merged
*/


class Solution {
    
    merge(l1,l2){
        let res = new Node(-1)
        const head = res
        
        while(l1 && l2){
            if(l1.data <= l2.data){
                res.bottom = new Node(l1.data)
                l1 = l1.bottom
            } else {
                res.bottom = new Node(l2.data)
                l2 = l2.bottom
            }
            
            res = res.bottom
        }
        
        while(l1){
            res.bottom = new Node(l1.data)
            l1 = l1.bottom
            res = res.bottom
        }
        
        while(l2){
            res.bottom = new Node(l2.data)
            l2 = l2.bottom
            res = res.bottom
        }
        
        return head.bottom
    }
    
    flatten(root) {
        // base case
        if(!root || !root.next) return root
        
        return this.merge(root,this.flatten(root.next))
    }
}