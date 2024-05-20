/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    
    nums.sort((a, b) => a - b);
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (nums[mid] === mid) {
            // 중간 값이 해당 인덱스와 같다면, 누락된 숫자는 오른쪽에 있음
            left = mid + 1;
        } else {
            // 중간 값이 해당 인덱스와 다르다면, 누락된 숫자는 왼쪽에 있음
            right = mid - 1;
        }
    }
    
    // left가 가리키는 위치가 누락된 숫자
    return left;
};

// 첫 번째 풀이 - 시간 초과
// var missingNumber = function(nums) {
//     let left = 0;
//     let right = nums.length - 1;

//     nums.sort((a,b) => a - b);
    
//     while(left < right) {
//         if(nums[left] === left && nums[right] === right) {
//             left++;
//             right--;
//         } else {
//             if(nums[left] !== left) {
//                 return left;
//             }
//             if(nums[right] === right) {
//                 return right;
//             }
//         }
//     }
// };