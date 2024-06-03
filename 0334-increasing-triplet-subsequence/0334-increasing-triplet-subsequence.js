/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    let first = Infinity; //Infinity 모든 숫자보다 크기때문에 초기화하려고 사용됨
    let second = Infinity;
    
    for (let num of nums) {
        if (num <= first) {
            first = num; 
        } else if (num <= second) {
            second = num; 
        } else {
            return true; 
        }
        //nums =[2,1,5,0,4,6]
        //console.log('first',first, 'second', second)
        //first 2 second Infinity
        //first 1 second Infinity
        //first 1 second 5
        //first 0 second 5
        //first 0 second 4
    }

    return false;
};


//특정 인덱스 x에 대해 자신의 앞에 나란히 증가하는 2개의 수가 있으면 True를 리턴하게 됩니다
// 예시 [1, 2, 3] 2개이상의 요소가 나란히 1씩 증가하므로 true
//[5,1,2] 2개이상의 요소가 나란히 증가하지 않기때문에 false