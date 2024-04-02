function solution(arr) {
    var answer = [];

    arr.forEach((list, index) => {
        answer.push(list)
        if(arr[index-1] === list ) {
            answer.pop();
        } 
    })
    
    return answer;
}