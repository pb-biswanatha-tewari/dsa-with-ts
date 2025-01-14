/*
question link: https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1
time complexity: T: O(m + n), S: O(1)
intuition:
    1. sort the arrays
    2. Now use two pointers to keep pushing the smallest number out of the two arrays
    3. If the number comes from arr, increase the count, else decrease it
    4. Trains incoming -> increase count, trains departing -> decrease the count
*/

class Solution {
    // Function to find the minimum number of platforms required at the
    // railway station such that no train waits.
    findPlatform(arr: Array<number>, dep: Array<number>) {
        let count = 0;
        let i = 0, j = 0;
        const n = arr.length;
        const m = dep.length;
        let result = 0;
        
        arr.sort((a,b) => a - b)
        dep.sort((a,b) => a - b)
        
        while(i < n && j < m){
            if(arr[i] <= dep[j]){
                count++;
                i++;
            } else {
                count--;
                j++;
            }
            
            result = Math.max(result,count)
        }
        
        if(i < n){
            count++;
            i++;
        }
        
        if(j < m){
            count--;
            j++;
        }
        
        return Math.max(count, result)
    }
}
