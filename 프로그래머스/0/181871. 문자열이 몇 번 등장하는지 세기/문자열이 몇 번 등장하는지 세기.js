function solution(myString, pat) {
    if(!myString.includes(pat)) return 0;
    
    let result = 0;
    
    for(let i = 0; i < myString.length - pat.length + 1; i++) {
        if(myString.substr(i, pat.length) === pat) result++;
    }
    return result;
}