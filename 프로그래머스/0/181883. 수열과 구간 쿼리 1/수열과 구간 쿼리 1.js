function solution(arr, queries) {
    var answer = [];
   let new_arr = [...arr];

    for(let i = 0; i < queries.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(queries[i][0] <= j && j <= queries[i][1]) {
                new_arr[j] = new_arr[j] +1
            }
        } 
        
    }
   answer = new_arr
    return answer;
}