function solution(s, n) {
    let lower = 'abcdefghijklmnopqrstuvwxyz'
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let result = '';
    
    [...s].map(e => {
        if(lower.includes(e)) {
            result += String.fromCharCode((lower.indexOf(e) + n) % 26 + 97);
        } else if(upper.includes(e)) {
            result += String.fromCharCode((upper.indexOf(e) + n) % 26 + 65);
        } else {
            result += e
        }
    })
    return result;
}
