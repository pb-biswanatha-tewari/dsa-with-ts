/* 
question link: https://leetcode.com/problems/trapping-rain-water/
Complexity: T  -> O(3N), S -> O(2N)
intution: Min(max height from left and right) - height of the building // formula
    1. We need to find the water trapped between the buildings
    2. We can find the water trapped at each building by finding the min of the max height from the left and right of the building and subtracting the height of the building
    3. We can find the max height from the left and right of the building by traversing the array twice
    4. We can ignore the edges as they will not trap any water
    5. Return the sum of the trapped water

    Optimised approach: T -> O(N), S -> O(1)
    1. We can find the max height from the left and right of the building by traversing the array once
    2. We can ignore the edges as they will not trap any water
    3. Return the sum of the trapped water

    It is derived from the mathimatical formula: Min(max height from left and right)
     - We use two pointers to keep track of the left and right max height, lMax and rMax
     - Since the formula says Min of lMax and rMax, we traverse the left of lMax is less and vice versa
      - On traversing left, we if see that current height is less than lMax, replace lMax else add the difference to the sum
      - On traversing right, we if see that current height is less than rMax, replace rMax else add the difference to the sum
 */


function optimisedTrap(height: number[]): number {
    const n = height.length
    let lMax = height[0]
    let rMax = height[n - 1]
    let l = 0, r = n - 1, sum = 0

    while(l < r){
        if(height[l] <= height[r]){
            if(height[l] > lMax) lMax = height[l]
            else sum += lMax - height[l]
            l++;
        } else {
            if(height[r] > rMax) rMax = height[r]
            else sum += rMax - height[r]
            r--;
        }
    }

    return sum
};

function trap(height: number[]): number {
    const n = height.length
    const lHeight = []
    const rHeight = new Array(n)

    // max from the left
    lHeight.push(height[0])
    for(let i = 1; i<n ; i++){
        lHeight[i] = Math.max(lHeight[i - 1], height[i])
    }

    // max from the right
    rHeight[n - 1] = (height[n - 1])
    for(let i = n - 2; i >= 0 ; i--){
        rHeight[i] = Math.max(rHeight[i + 1], height[i])
    }

    let sum = 0;
    for(let i = 1; i < n - 1; i++){ // ignorign the edges [0 & n - 1]
        let waterLevel = Math.min(lHeight[i - 1], rHeight[i + 1]) - height[i] // formula
        waterLevel = waterLevel > 0 ? waterLevel : 0
        sum = sum + waterLevel
    }

    return sum

};