function solution(a, b, c, d) {
    const arr = [a, b, c, d];
    let result = new Map()
    
    for(let i = 0; i < arr.length; i++) {
        result.set(arr[i], (result.get(arr[i]) || 0) + 1)
    }
    
    result = [...result];

    if(result.length === 1) {
        return result[0][0] * 1111;
    } else if(result.length === 2) {
        if(result[0][1] === 2) {
            return (result[0][0] + result[1][0]) * Math.abs(result[0][0] - result[1][0])   
        } else {
            result = result.sort((a, b) => b[1] - a[1]);
            return Math.pow(10 * result[0][0] + result[1][0], 2);
        }
    } else if(result.length === 3) {
        result = result.filter(e => e[1] === 1);
        return result[0][0] * result[1][0];
    } else {
        return Math.min(result[0][0], result[1][0], result[2][0], result[3][0]);
    }
}