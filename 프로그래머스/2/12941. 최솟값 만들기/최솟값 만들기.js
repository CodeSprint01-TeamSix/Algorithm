function solution(A,B){
    var answer = 0;
    // 최소화 최대화 전략 -> 높은 값과 낮은 값 곱하면 결과가 상대적으로 작아짐
    A.sort((a,b) => a-b) //오른차순 정렬
    B.sort((a,b) => b-a) // 내림차순 정렬
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i]
    }

    return answer;
}