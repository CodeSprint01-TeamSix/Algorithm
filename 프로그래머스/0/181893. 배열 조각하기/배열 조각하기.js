function solution(arr, query) {
    var answer = [];
    query.forEach((list,index) => {
        arr = arr.filter((ar, idx) => {
            return index % 2 === 0 ? idx <= list : idx >= list
        })
       
    })
    answer = arr
    return answer;
}