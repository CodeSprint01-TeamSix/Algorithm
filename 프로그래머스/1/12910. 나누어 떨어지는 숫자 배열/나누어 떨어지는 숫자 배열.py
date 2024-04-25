def solution(arr, divisor):
    filter_arr = list(filter(lambda x: x % divisor == 0, arr))
    filter_arr.sort()
    return filter_arr if len(filter_arr) > 0 else [-1]