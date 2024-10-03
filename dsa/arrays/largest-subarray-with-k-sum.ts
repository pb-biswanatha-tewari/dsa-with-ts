/*
question link: https://practice.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1
time complexity: T: O(n), S: O(n) due to prefix sum and map usage
intuition:
  1. The problem asks to find the length of the longest subarray with a sum of 0.
  2. Approach:
    a. We use the **prefix sum** technique to keep track of cumulative sums as we iterate through the array.
    b. A subarray with a sum of 0 occurs when the prefix sum at two different indices is the same. This is because the elements between these indices cancel each other out, resulting in a sum of 0.
  3. We iterate through the array twice:
      - **First Pass**: Calculate the prefix sum and store it in an array `nums`.
        - If the prefix sum is 0 at any index, it means that the subarray from the beginning to this index has a sum of 0, and we update `maxL` accordingly.
      - **Second Pass**: Use a map `mp` to store the first occurrence of each prefix sum. If we encounter the same prefix sum again, it indicates that the subarray between these two occurrences has a sum of 0.
        - The difference between the current index and the index where the prefix sum first appeared gives the length of the subarray with sum 0. We update `maxL` if this length is greater than the previously found ones.
  4. **Edge Case**: If the entire array or part of it sums to 0 (e.g., `[-1, 1, -1, 1]`), we handle it by checking if the prefix sum equals 0 at any index.
  5. Finally, we return `maxL`, which represents the length of the longest subarray with sum 0.
*/

function maxLen(arr: number[],n: number){
    const mp = new Map();
    let maxL = 0;
    const nums: number[] = [];
    
    
    // prefix sum
    arr.forEach((num,index) => {
        if(index === 0) nums[index] = arr[index];
        else nums[index] = nums[index - 1] + arr[index]
        
        if(nums[index] === 0) maxL = Math.max(maxL,index + 1) // for edge cases like: [-1,1,-1,1]
    })
    
    nums.forEach((num,index) => {
        if(!mp.has(num)){
            mp.set(num,index)
        } else {
            maxL = Math.max(maxL,index - mp.get(num))
        }
    })
    
    return maxL
}