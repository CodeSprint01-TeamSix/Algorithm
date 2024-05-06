/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const myMap = new Map();
    let result = [];

    for(const num of nums) {
        myMap.set(num, (myMap.get(num) || 0) + 1)
    }
    
    const sortedArray = [...myMap].sort((a, b) => b[1] - a[1]);
    
    for(let i = 0; i < k; i++) {
        result.push(sortedArray[i][0])
    }
    return result;
};

// var topKFrequent = function(nums, k) {
//     const myMap = new Map();
//     let result = [];
//     let cnt = 1;

//     for(let i = 0; i < nums.length; i++) {
//         if(nums[i] === nums[i+1]) {
//             cnt++;
//         } else {
//             myMap.set(nums[i], cnt);
//             cnt = 1;
//         }
//     }
//     for(let i = 0; i < k; i++) {
//         result.push([...myMap][i][0])
//     }
//     return result;
// };

// 이런 방식으로 하면 cnt 변수를 사용하여 요소의 빈도를 추적하는 부분에 문제가 생김 
// 이 방법은 요소가 연속되는 경우에만 작동한다. 
// 예를 들어, [1, 1, 1, 2, 2, 3] 배열에서 1이 연속되므로 이 방법이 작동하지만, [1, 2, 1, 2, 3, 3] 배열과 같이 연속되지 않는 경우에는 작동하지 않는다.
