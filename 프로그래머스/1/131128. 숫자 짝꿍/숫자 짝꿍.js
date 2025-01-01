function solution(X, Y) {
    const countX = new Map();
    const countY = new Map();
    
    for(const dict of X) {
        countX.set(dict, (countX.get(dict) || 0) + 1);
    }
    
    for(const dict of Y) {
        countY.set(dict, (countY.get(dict) || 0) + 1);
    }
    
    let result = '';
    
    for(let i = 9; i >= 0; i--) {
        let count = Math.min(countX.get(String(i)) || 0, countY.get(String(i)) || 0);
        if(count > 0) result += String(i).repeat(count);
    }
    
    if(parseInt(result) === 0) {
        result = '0';
    } 
    
    if(result === '') {
        result = '-1';
    }
    
    return result;
}