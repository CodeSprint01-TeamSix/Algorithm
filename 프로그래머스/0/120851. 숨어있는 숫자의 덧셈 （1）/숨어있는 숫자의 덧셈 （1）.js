function solution(my_string) {
    return [...my_string].filter(e => isNaN(e) === false).reduce((a, b) => parseInt(a) + parseInt(b));
}