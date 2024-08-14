function solution(binomial) {
    let part = binomial.split(' ');
    let a = part[1]
    let b = parseInt(part[0])
    let c = parseInt(part[2])
    
    switch(a) {
        case '+': 
            return b + c;
            break;
        case '-':
            return b - c;
            break;
        case '*':
            return b * c;
            break;
    }
}