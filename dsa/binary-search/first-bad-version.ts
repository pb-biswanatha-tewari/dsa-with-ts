/* 
question link: https://leetcode.com/problems/first-bad-version/
time complexity: O(log N) best case
intution: it a basic twist of binary search, similar problem is egg dropping problem
*/

/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let minBadVersion = Number.MAX_VALUE;

    let left = 1;
    let right = n;

    while (right >= left) {
      let mid = Math.floor((right - left) / 2) + left;

      if (isBadVersion(mid)) {
        minBadVersion = Math.min(minBadVersion, mid);
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }

    return minBadVersion;
  };
};
