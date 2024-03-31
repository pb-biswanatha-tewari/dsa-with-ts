/* 
question link: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
time complexity: O(N) best case
*/

function maxProfit(prices: number[]): number {
  let maxProfit = 0;
  let buyOn = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[buyOn]) {
      buyOn = i;
    } else if (prices[i] - prices[buyOn] > maxProfit) {
      maxProfit = prices[i] - prices[buyOn];
    }
  }

  return maxProfit;
}
