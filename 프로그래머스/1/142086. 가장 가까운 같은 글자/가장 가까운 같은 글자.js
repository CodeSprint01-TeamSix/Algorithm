function solution(s) {
    let dic = {};
    
    return [...s].map((v, i) => {
        let result = dic[v] !== undefined ? i - dic[v] : -1;
        dic[v] = i;
        return result;
    })
}