function solution(cipher, code) {
    let result = '';
    for(let i = 1; i <= cipher.length; i++) {
        if(i % code === 0) {
            result += cipher[i-1];
        }
    }
    return result;
}