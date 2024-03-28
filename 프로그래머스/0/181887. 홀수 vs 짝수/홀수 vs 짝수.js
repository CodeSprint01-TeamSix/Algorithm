function solution(num_list) {
    var answer = 0;
    let even = 0;
    let odd = 0;
    num_list.forEach((list, index) => {
        
        if((index + 1) % 2 === 0) {
            even += list
        } else {
            odd += list
        }
        
    })
    answer = even > odd ? even : odd
    return answer;
}