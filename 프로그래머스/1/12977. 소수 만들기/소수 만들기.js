function isPrime(n) {
    let cnt = 0;
    
    if(n < 2) return false;
    
    for(let i = 2; i <= n; i++) {
        if(n % i === 0) cnt++;
    }
    
    return cnt === 1 ? true : false;
}

function solution(nums) {
    let result = 0;
    let arr = [];
    
    for(let i = 0; i < nums.length - 2; i++) {
        for(let j = i+1; j < nums.length - 1; j++) {
            for(let k = j+1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) result++;
            }
        }
    }
    
    return result;
}