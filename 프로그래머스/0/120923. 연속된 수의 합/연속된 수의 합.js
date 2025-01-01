function solution(num, total) {
    let result = [];
    
    if(num % 2 !== 0) {
        for(let i = 0; i < Math.ceil(num / 2); i++) {
            if(result.length === 0) {
                result.push(total / num);
            } else {
                result.push((total / num) - i)
                result.push((total / num) + i)
            }   
        }
    } else {
        for(let i = 0; i < num / 2; i++) {
            if(result.length === 0) {
                result.push(Math.floor(total / num));
                result.push(Math.ceil(total / num));
            } else {
                result.push(Math.floor(total / num) - i);
                result.push(Math.ceil(total / num) + i);
            }   
        }
    }
    return result.sort((a,b) => a - b);
}