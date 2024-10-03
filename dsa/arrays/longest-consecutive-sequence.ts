/*
question link: https://leetcode.com/problems/longest-consecutive-sequence/
time complexity: T: O(n), S: O(n) due to storing elements in the map
intuition:
  1. The problem asks to find the length of the longest consecutive sequence in an unsorted array of numbers.
  2. Approach:
    a. We use a map `mp` to store all the elements from the input array, allowing for O(1) lookups when checking consecutive numbers.
    b. **Identifying starting points**:
        - A starting point for a consecutive sequence is a number that does not have its predecessor (i.e., `num - 1`) in the map.
        - For example, in the sequence [1, 2, 3], `1` is the starting point because `0` is not in the array.
    c. We collect all such starting points in an array `sp`.
  3. For each starting point in `sp`:
    a. We check for consecutive numbers by repeatedly checking if `num + 1`, `num + 2`, and so on exist in the map.
    b. We keep track of the length of the current sequence and update `maxL` if the current sequence is longer than the previously found ones.
  4. The while loop continues to check each starting point's sequence until there are no more consecutive numbers.
  5. Finally, we return the maximum length `maxL`, which represents the length of the longest consecutive sequence.
*/

function longestConsecutive(nums: number[]): number {
    const mp = new Map();
    const sp: number[] = []; // starting points

    // store the elements in the map
    nums.forEach((num) => mp.set(num,1));

    // find the starting points, intution: the starting point elements will be
    // ones which does have a consecutive smaller number, i.e., for x there won't
    // be a x - 1 in the map
    nums.forEach((num) => {
        if(!mp.has(num - 1)){
            sp.push(num)
        }
    })

    let maxL = 0;

    // out of these starting points find out which one has the longest consecutive sequence
    sp.forEach((num) => {
        let flag = true;
        let nextNumber = num + 1;

        while(flag){
            if(mp.has(nextNumber)){
                nextNumber++;
            } else {
                maxL = Math.max(maxL,nextNumber - num)
                flag = false;
            }
        }
    })

    return maxL
};