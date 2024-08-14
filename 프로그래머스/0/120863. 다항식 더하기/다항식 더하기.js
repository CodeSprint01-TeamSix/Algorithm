function solution(polynomial) {
    let answer = '';
    let variable = 0;
    let constant = 0;
    
    polynomial = polynomial.split(' + ');

    polynomial.forEach((e) => {
        if(e.includes('x')) {
            let a = e.replace('x', '');
            if(a === '') a = 1;
            variable += parseInt(a)
        } else {
            constant += parseInt(e)
        }
    })
    if(variable !== 0) {
        if(variable === 1) answer += 'x';
        else answer += (`${variable}x`)
    }
    
    if(constant !== 0) {
        if(variable !== 0) answer += ' + ';
        answer += constant
    }
    
    return answer === '' ? '0' : answer;
}