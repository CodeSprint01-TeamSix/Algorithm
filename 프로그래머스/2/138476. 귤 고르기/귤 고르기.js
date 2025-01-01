function solution(k, tangerine) {
    let result = 0;
    let cnt = 0;
    
    let dict = {}
    
    for(let i = 0; i < tangerine.length; i++) {
        dict[tangerine[i]] = (dict[tangerine[i]] || 0) + 1
    }
    
    let sortedValuesArray = Object.values(dict).sort((a,b) => b - a)
    
    while(result < k) {
        result += sortedValuesArray[cnt];
        cnt++;
    }
    return cnt;
}