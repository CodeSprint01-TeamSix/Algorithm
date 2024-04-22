function solution(A,B){
    let result = [];
    
    A.sort((a,b) => a - b);
    B.sort((a,b) => b - a);
    
    for(let i = 0; i < A.length; i++) {
        result.push(A[i] * B[i]);
    }
    return result.reduce((prev, cur) => prev + cur, 0);
}
