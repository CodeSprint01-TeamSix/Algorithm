function solution(order) {
    let cnt = 0;

    order.toString().split('').forEach(e => {
        if(e === '3' || e === '6' || e === '9') cnt++;
    })
    
    return cnt;
}