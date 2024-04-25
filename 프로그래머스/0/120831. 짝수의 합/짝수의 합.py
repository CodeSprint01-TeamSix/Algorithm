def solution(n):
    answer = 0
    for num in range(n):
        if (num+1) % 2 == 0:
            answer += num+1
    return answer