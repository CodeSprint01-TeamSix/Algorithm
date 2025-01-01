function solution(order) {
    let sequence = 1;
    let temp = [];
    let cnt = 0;
    
    for(let i = 0; i < order.length; i++) {
        while(sequence <= order[i]) {
            temp.push(sequence);
            sequence++;
        }
        
        if(order[i] === temp.pop()) {
            cnt++;
        } else {
            break;
        }
    }
    
    return cnt;
}