def solution(absolutes, signs):
    answer = 0
    #new_array = []
    #for i,num in enumerate(absolutes):
        #if signs[i]:
            #new_array.append(num)
        #else:
            #new_array.append(-num)
    #answer = sum(new_array)
    for absolute, sign in zip(absolutes, signs):
        if sign:
            answer += absolute
        else:
            answer -= absolute
    return answer