/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);
    return candies.map(candy => {
        const sum = candy + extraCandies
        if(sum < max) {
            return false
        } else {
            return true
        }
    })
};

// 가장 많이 사탕을 가진 아이를 구하고
// 그 기준으로 true인지 false인지 return해준다