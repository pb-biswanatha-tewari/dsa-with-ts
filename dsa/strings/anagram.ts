/* 
question link: https://leetcode.com/problems/valid-anagram
time complexity: O(1) best case
*/

function isAnagram(s: string, t: string): boolean {
  const sCount = new Array(26).fill(0);
  const tCount = new Array(26).fill(0);

  s = s.toLowerCase();
  t = t.toLowerCase();

  for (const ch of s) {
    const index = Number(ch.charCodeAt(0)) - 97;
    sCount[index]++;
  }

  for (const ch of t) {
    const index = Number(ch.charCodeAt(0)) - 97;
    tCount[index]++;
  }

  for (let i = 0; i < 26; i++) {
    if (sCount[i] != tCount[i]) return false;
  }

  return true;
}
