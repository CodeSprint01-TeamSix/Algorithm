function solution(l, r) {
    let result = [];
    
    for(let i = l; i <= r; i++) {
        if(i.toString().split('').every(num => num === '0' || num === '5')) {
                result.push(i);
        }
    } 
    return result.length ? result : [-1]
}