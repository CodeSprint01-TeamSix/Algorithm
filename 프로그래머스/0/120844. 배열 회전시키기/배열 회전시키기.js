function solution(numbers, direction) {
    if(direction === 'left') {
        let answer = numbers.shift();
        numbers.push(answer)
    } else {
        let answer = numbers.pop();
        numbers.unshift(answer);
    }
    return numbers
}