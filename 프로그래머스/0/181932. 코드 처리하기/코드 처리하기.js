function solution(code) {
    let mode = 0;
    let result = '';
    
    for(let i = 0; i < code.length; i++) {
        if(mode === 0) {
            if(code[i] !== '1' && i % 2 === 0) {
                result += code[i];
            } else if(code[i] === '1') {
                mode = 1;
            }
        } else if(mode === 1) {
            if(code[i] !== '1' && i % 2 !== 0) {
                result += code[i];
            } else if(code[i] === '1') {
                mode = 0;
            }
        }
    }
    return result.length ? result : 'EMPTY'
}