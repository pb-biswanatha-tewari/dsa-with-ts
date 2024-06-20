/* 
question link: https://leetcode.com/problems/pascals-triangle/
time complexity: O((N - 1) * (N-1!)) best case, O(N^2) worst case
*/

function generate(numRows: number): number[][] {
  const arr = [[1]];

  if (numRows === 1) return arr;

  for (let i = 1; i < numRows; i++) {
    arr.push([]);
    for (let j = 0; j <= i; j++) {
      const x = arr[i - 1][j - 1] ?? 0;
      const y = arr[i - 1][j] ?? 0;
      arr[i].push(x + y);
    }
  }

  return arr;
}
