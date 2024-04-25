def solution(x):
    answer = True
    result = x % sum(list(map(int, str(x)))) == 0
    answer = True if result else False
    return answer