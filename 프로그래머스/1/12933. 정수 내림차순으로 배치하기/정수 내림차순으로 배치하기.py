def solution(n):
    answer = 0
    s = str(n)
    sorted_s = ''.join(sorted(s, reverse=True))
    answer = int(sorted_s)
    return answer