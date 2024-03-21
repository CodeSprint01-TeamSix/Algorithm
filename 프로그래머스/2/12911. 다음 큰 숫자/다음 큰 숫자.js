function solution(n) {
    var answer = 0;
    let num = 1;
    const dec2bin = n.toString(2).replaceAll('0', '').length
    
    while(true) {
        const dec2bin2 = (n+num).toString(2).replaceAll('0', '').length
        if(dec2bin2 === dec2bin) {
            answer = n+num
            break;
        }
        num++
    }

    return answer;
}
