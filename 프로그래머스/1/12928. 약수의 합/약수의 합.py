def solution(n):
    answer = 0
    box = []
    for num in range(1,int(n/2)+1):
        if n % num == 0:
            box.append(num)
    box.append(n)
    #print(box)
    answer = sum(box)
    return answer