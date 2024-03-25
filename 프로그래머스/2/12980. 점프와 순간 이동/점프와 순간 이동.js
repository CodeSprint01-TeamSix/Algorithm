function solution(n){
    let move = 0;
    
    while(n !== 0) {
        if(n%2 === 0) {
            n = n/2;
        } else {
            n--;
            move++;
        }
    }
    return move;
}

// 현재까지 온 거리 x2 위치로 순간이동
// 순간이동은 건전지 x
// k칸 점프 -> k 만큼 건전지 사용량 줄어듬
// 거리 n
// 점프 최소화
// 건전지 사용량 최솟값 return 