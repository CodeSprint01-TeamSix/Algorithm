def solution(a, b):
    answer = 0
    #terms_1 = a if a > b else b
    #terms_2 = b if a > b else a
    #for num in range(terms_2, terms_1 +1):
      #  answer += num
    if a > b:
        a, b = b, a
        
    answer= sum(range(a,b+1))
    return answer 