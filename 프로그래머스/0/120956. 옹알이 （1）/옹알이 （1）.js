function solution(babbling) {
    let cnt = 0;
    const pattern = /aya|ye|woo|ma/g
    
    const result = babbling.map(word => word.replace(pattern, ''));
    result.forEach(word => {
        if(word.length === 0) cnt++
    })
    
    return cnt;
}