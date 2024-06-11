/* 
question link: https://leetcode.com/problems/longest-substring-without-repeating-characters/
time complexity: O(N) best case
intution: we use sliding window here, left pointer and right pointer
          as soon as we encounter a repeating character, we clear all its previous occurance from the map
          then we calculate distance of the pointers / length of the new substring
*/

function lengthOfLongestSubstring(s: string): number {
  let left = 0;
  let maxLength = 0;
  let mp = new Map();

  for (let right = 0; right < s.length; right++) {
    while (mp.has(s[right])) {
      mp.delete(s[left]); // remove duplicates
      left++;
    }

    mp.set(s[right], 1);
    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
