function solution(my_string) {
    let number = my_string.match(/\d+/g);
    return number ? number.reduce((prev, cur) => (Number(prev) + Number(cur)), 0) : 0;
}