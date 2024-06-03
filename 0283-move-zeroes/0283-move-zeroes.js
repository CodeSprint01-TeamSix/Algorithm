/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // 0이 아닌 요소의 순서는 유지하면서 0은 오른쪽 끝으로 이동
    let s = 0;
    let e = 1;
    while (e < nums.length) {
        if (nums[s] === 0 && nums[e] === 0) { //현재 요소와 다음 요소의 값이 둘다 0이면 다음 index에 +1 하고 넘겨줌
            e += 1;
            continue;
        }
        
        if (nums[s] === 0 && nums[e] !== 0) { //현재 요소는 0이고 다음 요소가 0과 같지 않으면 현재 요소와 위치 변경 
            [nums[s], nums[e]] = [nums[e], nums[s]];
        }
        s += 1;
        e += 1;
    }
    return nums;
};

// https://velog.io/@dev-redo/283.-Move-Zeroes-%ED%92%80%EC%9D%B4-js