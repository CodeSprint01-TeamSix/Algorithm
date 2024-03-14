function solution(s) {
    let cnt = 0;
    let zero = 0;
    while(s !== '1') {
      let sLen = s.length
      s = s.replace(/0/g, ''); //0을 제거
      zero += sLen - s.length;
      cnt ++;
      s = s.length.toString(2);
    }
    return [cnt, zero]
}