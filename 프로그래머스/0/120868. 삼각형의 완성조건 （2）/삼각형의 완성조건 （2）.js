function solution(sides) {
    let cnt = 0;
    
    // 나머지 한 변이 가장 긴 변인 경우
    cnt += sides[0] + sides[1] - Math.max(...sides) - 1;
    
    // 가장 긴 변이 sides중 큰 값인 경우
    cnt += Math.max(...sides) - (Math.max(...sides) - Math.min(...sides));
    
    return cnt;
}