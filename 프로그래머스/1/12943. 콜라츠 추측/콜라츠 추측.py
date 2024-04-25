def solution(num):
    answer = 0

    def repeat(n):
        nonlocal answer

        if n == 1:
            return
        elif answer == 500:
            answer = -1
            return 
        
        answer += 1
        if n % 2 == 0:
            return repeat(n/2)
        else:
            return repeat(n * 3 +1)
        
    repeat(num)
    return answer