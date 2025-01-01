function solution(polynomial) {
    let result = [0, 0];

    polynomial = polynomial.split('+').map(e => {
        e = e.trim();
        if(e === 'x') return e = '1x';
        else return e;
    })
    
    for(let i = 0; i < polynomial.length; i++) {
        if(polynomial[i].includes('x')) {
            result[0] += parseInt(polynomial[i].replace('x', ''))
        } else {
            result[1] += parseInt(polynomial[i])
        }
    }
    
    let xPart = result[0] === 0 ? '' : (result[0] === 1 ? 'x' : result[0].toString() + 'x');
    let constantPart = result[1] === 0 ? '' : result[1].toString();
    
    if(xPart && constantPart) {
        return xPart + ' + ' + constantPart;
    } else if(xPart) {
        return xPart
    } else {
        return constantPart
    }
}