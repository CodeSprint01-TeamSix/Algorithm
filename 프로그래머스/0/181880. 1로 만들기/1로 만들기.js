function divition(n) {
    let cnt = 0;
    
    while(n !== 1) {
        if(n % 2 === 0) {
            n = n / 2;
            cnt++;
        } else {
            n = (n - 1) / 2;
            cnt++;
        }
    }
    return cnt;
}

function solution(num_list) {
    let result = 0;
    
    for(let i = 0; i < num_list.length; i++) {
        result += divition(num_list[i]);
    }
    return result;
}