/* 
question link: https://leetcode.com/problems/set-matrix-zeroes/
time complexity: O(N*M) + O(N*M)
intution: 
    1. Brute force T: O(N*M*(N+M)), S: O(1).
        a. Iterate the array, on finding any zero, subtract 1 from all the adjacent row & col elements if the val is 0
        b. Subtract the 0s with 1 so as to we are not confused with the original 0s
        c. Now replace the negative numbers with 0
    2. Better approach T: O(N*M) + O(N*M), S: O(N+M)
        a. traverse the array, store the location of the 0s -> arrays
        b. traverse again from the begining and set the val to 0 based of the arrays
 */

function setZeroes(matrix: number[][]): void {
  const N = matrix.length;
  const M = matrix[0].length;

  const row = new Array(N).fill(0); // no of rows
  const col = new Array(M).fill(0); // no of column

  // find out all the 0s in the matrix -> O(N*M)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (matrix[i][j] === 0) {
        row[i] = 1;
        col[j] = 1;
      }
    }
  }

  // while traversing the array again, mark the ones ->  O(N*M)
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (row[i] === 1 || col[j] === 1) {
        matrix[i][j] = 0;
      }
    }
  }
}
