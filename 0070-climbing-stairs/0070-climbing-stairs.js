/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // n번째는 n-1에서 1개의 스텝만 오르면된다. n-2개에서는 2개짜리 계단을 오르면 된다. 
    let arr = [1, 1];
    for(let i = 2;i<=n;i++){
        arr.push(arr[i-1]+arr[i-2]);
    }
    console.log(arr);
    return arr[arr.length-1];
    // 함수 n(x): x개의 계단 오르는 경우의 수  
    // n(1) = 1
    // n(2) = n(1) + n(0)
    // n(3) = n(1) +n(2)
    // n(4)=n(3)+n(2)
    // n(x)=n(x-1)+n(x-2)
};