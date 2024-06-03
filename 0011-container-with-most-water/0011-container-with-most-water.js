/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1
    let maxArea = 0;
    
    while(left < right) {
        let width = right - left;
        let currentArea = Math.min(height[left], height[right]) * width;

        maxArea = Math.max(maxArea, currentArea);

        // 높이는 높아야 area가 넓어지므로 작은 것을 ++ 또는 -- 해줘야 한다.
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    return maxArea
};