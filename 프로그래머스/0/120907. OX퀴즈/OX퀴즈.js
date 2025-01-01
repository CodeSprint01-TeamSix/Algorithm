function solution(quiz) {
    let result = [];
    
    for(let i = 0; i < quiz.length; i++) {
        let a = quiz[i].split(' = ')

        if(a[0].includes(' + ')) {
            let b = a[0].split(' + ');
            if(parseInt(b[0]) + parseInt(b[1]) === parseInt(a[1])) {
                result.push('O');
            } else {
                result.push('X')
            }
        } else if(a[0].includes(' - ')) {
            let c = a[0].split(' - ');
            if(parseInt(c[0]) - parseInt(c[1]) === parseInt(a[1])) {
                result.push('O')
            } else {
                result.push('X')  
            }
        }
    }
    return result;
}