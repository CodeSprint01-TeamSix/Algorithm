function solution(binomial) {
    var answer = 0;
    //answer = eval(binomial)
    const calculation = {
        '+': (a,b) => a + b,
        '-': (a,b) => a-b,
        '*': (a,b) => a*b,
    }
    const split_num = binomial.split(' ')
    const [a, op , b] = split_num
    answer = calculation[op](+a, +b)
    return answer;
}