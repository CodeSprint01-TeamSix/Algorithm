function solution(my_string) {
    let result = [];
    let nums = '1234567890'
    
    for(let i = 0; i < my_string.length; i++) {
        if(nums.includes(my_string[i])) result.push(Number(my_string[i]));
    }
    
    return result.sort((a,b) => a - b);
}