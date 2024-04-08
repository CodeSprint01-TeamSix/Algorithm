function solution(num_list) {
    var answer = 0;
    
    num_list.forEach(num => {
        let new_num = num
        while(new_num !== 1) {
            if(new_num % 2 === 0) {
                new_num = new_num / 2;
                answer += 1
            } else {
                new_num = (new_num-1)/2;
                answer += 1
            }
        }
    })
    return answer;
}
