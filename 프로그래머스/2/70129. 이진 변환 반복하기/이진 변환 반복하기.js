function solution(s) {
    var answer = [];
    let count = 0;
    let length = 0;
    
    while(s !== '1') {
        //console.log('이진수', s)
        const removeZero = s.replaceAll('0', '')
        length += s.length - removeZero.length
        //console.log('0 제거', removeZero, '제거된 0개수', length)
        count += 1
        s = (removeZero.length >>> 0).toString(2);
        //console.log('이진수로 변환', s)
    }
    answer = [count, length]
    return answer;
}