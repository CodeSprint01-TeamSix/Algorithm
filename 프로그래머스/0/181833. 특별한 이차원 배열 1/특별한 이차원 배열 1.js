function solution(n) {
    let answer = [];

    for(let i = 0; i < n; i++) {
        let arr = Array(n).fill(0)
        arr[i] = 1;
        answer.push(arr)
    }
    return answer;
}