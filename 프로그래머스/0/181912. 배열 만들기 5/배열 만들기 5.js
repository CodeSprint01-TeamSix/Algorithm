function solution(intStrs, k, s, l) {
    let result = [];
    
    for(let i = 0; i < intStrs.length; i++) {
        let newIntStrs = intStrs[i].substr(s, l)
        if(+newIntStrs > k) result.push(+newIntStrs)
    }
    return result;
}