function solution(num_list, n) {
    let result = [];
    let temp = [];
    
    for(let i = 0; i <= num_list.length; i++) {
        if(temp.length !== n) {
            temp.push(num_list[i])
        } else {
            result.push(temp);
            temp = [];
            temp.push(num_list[i])
        }
    }
    return result;
}