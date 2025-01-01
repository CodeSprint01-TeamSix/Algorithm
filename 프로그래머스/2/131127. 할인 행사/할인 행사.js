function solution(want, number, discount) {
    let dict = {};
    let repeatLen = discount.length - 10
    let cnt = 0;
    
    for(let i = 0; i < want.length; i++) {
        dict[want[i]] = number[i]
    }
    
    for(let i = 0; i < 10; i++) {
        dict[discount[i]] = (dict[discount[i]] || 0) - 1;
    }
    
    if(Object.values(dict).every(val => val === 0)) cnt++;
    
    for(let i = 0; i < repeatLen; i++) {
        dict[discount[i]]++;
        
        dict[discount[i + 10]] = (dict[discount[i + 10]] || 0) - 1;
        
        if(Object.values(dict).every(val => val === 0)) cnt++;
    }
    return cnt;
}