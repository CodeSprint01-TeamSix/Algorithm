function solution(s){
    var answer = -1;
    const stack = [];
    
    function check_word (word) {
        if(stack.at(-1) === word) {
            stack.pop()
        } else {
            stack.push(word)
        }
    }
    
    for (let i =0; i < s.length; i++) {
        check_word(s[i])
    }
    answer = stack.length > 0 ? 0 : 1
    return answer;
}