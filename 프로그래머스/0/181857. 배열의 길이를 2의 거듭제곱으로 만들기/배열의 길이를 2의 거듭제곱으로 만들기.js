function solution(arr) {
    var answer = [];
    
    const total_length = 2**(Math.ceil(Math.log2(arr.length)))
    //console.log(total_length)
    //console.log(arr.length)
    const arrar_zero = Array.from({ length: total_length - arr.length }).fill(0)
    
    
    answer = [...arr, ...arrar_zero]
    return answer;
}