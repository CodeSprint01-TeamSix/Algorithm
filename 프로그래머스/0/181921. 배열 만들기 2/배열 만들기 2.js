function solution(l, r) {
    let result = [];
    
    for(let i = l; i <= r; i++) {
        let str = i.toString();
        if([...str].every(char => char === '0' || char === '5')) result.push(parseInt(str));
    }
    return result.length ? result : [-1];
}