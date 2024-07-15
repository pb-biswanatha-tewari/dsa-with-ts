/* 
question link: https://leetcode.com/problems/merge-intervals/
time complexity: O(N log N) best case
intution: 
    1. Sort the array based on the start index
    2. Create an object which holds the start index and the end index => x = {start: null, end: null}
    3. next check if the end index is greater than equals the next element's start index
        store the maximum end time of the current and the element in x.end
      else push object x in the new arr
*/

function merger(intervals: number[][]): number[][] {
  const arr = [];

  intervals.sort((a, b) => a[0] - b[0]);
  const x = { start: intervals[0][0], end: intervals[0][1] };

  for (let i = 0; i < intervals.length; i++) {
    if (intervals[i][0] <= x.end) {
      x.end = Math.max(intervals[i][1], x.end);
    } else {
      arr.push([x.start, x.end]);
      x.start = intervals[i][0];
      x.end = intervals[i][1];
    }
  }

  arr.push([x.start, x.end]);

  return arr;
}
