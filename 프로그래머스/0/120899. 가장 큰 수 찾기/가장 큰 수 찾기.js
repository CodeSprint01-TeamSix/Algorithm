function solution(array) {
    let result = [];
    result.push(Math.max(...array))
    array.filter((e, idx) => array[idx] === Math.max(...array) ? result.push(idx) : null);
    
    return result;
}