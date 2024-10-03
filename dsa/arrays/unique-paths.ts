/*
question link: https://leetcode.com/problems/unique-paths/
time complexity: T: O(m * n), S: O(m * n) due to memoization, in-case of recursion, T: O(2^m+n)
intuition:
  1. The problem asks for the number of unique paths from the top-left corner (0,0) to the bottom-right corner (m-1,n-1) in a grid.
  2. We can either move right or down at each step, so at any position `(r, c)`, the number of ways to reach the destination is the sum of paths going down and right.
  3. To solve this using recursion, we define a recursive function `DFS(r, c)` to explore these two possible moves:
      - Base Case 1: If we reach the bottom-right corner `(m-1, n-1)`, we return 1 as we have found a valid path.
      - Base Case 2: If we go out of bounds (i.e., r >= m or c >= n), we return 0 as it’s an invalid path.
  4. To avoid redundant calculations and improve efficiency, we use a 2D memoization array `dp` to store already computed results:
      - If the result for `dp[r][c]` has been previously calculated, we return the saved result.
  5. Finally, we start the recursion from the top-left corner `(0,0)` and return the total number of unique paths.
*/

function uniquePaths(m: number, n: number): number {
    const dp = new Array(m).fill(-1);

    for(let i=0; i<m; i++){
        dp[i] = new Array(n).fill(-1);
    }

    function DFS(r: number, c: number): number {
        // base cases
        if(r === m - 1 && c === n - 1) return 1;
        else if(r >= m || c >= n) return 0;

        if(dp[r][c] !== -1) return dp[r][c];

        const result = DFS(r+1,c) + DFS(r,c+1)
        dp[r][c] = result;

        return result; 
    }


    return DFS(0,0)

};