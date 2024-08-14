function solution(order) {
    let result = 0;
    
    for(let i = 0; i < order.length; i++) {
        if(order[i].includes('americano') || order[i].includes('anything')) {
            result += 4500;
        } else {
            result += 5000;
        }
    }
    return result;
}