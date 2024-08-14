function solution(number) {
    return [...number].reduce((a,b) => (parseInt(a) + parseInt(b)), 0) % 9;
}