/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    //문제: 현재 요소를 제외한 나머지값 곱해서 배열로 리턴??
    const n = nums.length;
    const leftProducts = new Array(n).fill(1);
    const rightProducts = new Array(n).fill(1);
    const result = new Array(n);

    //왼쪽부터 곱하기
    for (let i = 1; i < n; i++) {
        leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
        //console.log('left',leftProducts[i - 1] , nums[i - 1], leftProducts)
    }

    //left 1 1 [ 1, 1, 1, 1 ]
   //left 1 2 [ 1, 1, 2, 1 ]
   //left 2 3 [ 1, 1, 2, 6 ]

    // 오른쪽부터 곱하기
    for (let i = n - 2; i >= 0; i--) {
        rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
        //console.log('right', rightProducts[i + 1] , nums[i + 1], rightProducts)
    }
    //right 1 4 [ 1, 1, 4, 1 ]
    //right 4 3 [ 1, 12, 4, 1 ]
    //right 12 2 [ 24, 12, 4, 1 ]

    //console.log(leftProducts, rightProducts)

    
    for (let i = 0; i < n; i++) {
        result[i] = leftProducts[i] * rightProducts[i];
    }

    return result;

/////////////////////
    //return nums.map((num, index) => { 시간 초과
        //return nums
           // .filter((_, i) => i !== index)  // i와 map에서 가져온 index값이 일치하지 않는것만 필터
           // .reduce((product, current) => product * current, 1); //필터한 배열을 하나씩 곱해준다
    //});
};