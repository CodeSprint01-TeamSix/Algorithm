function solution(s) {
    let cnt = 0;
    let zero = 0;
    
    while(s !== '1') {
        let SLen = s.length;
        s = s.replace(/0/g, '');
        zero += SLen - s.length;
        cnt ++;
        s = s.length.toString(2);
    }
    return [cnt, zero];
}