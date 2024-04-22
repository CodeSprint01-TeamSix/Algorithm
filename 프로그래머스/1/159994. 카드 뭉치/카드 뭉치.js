function solution(cards1, cards2, goal) {
    var answer = '';
    
    for(let i = 0; i < goal.length; i++) {
        if(cards1.includes(goal[i]) || cards2.includes(goal[i])) {
           if(cards1[0] === goal[i]) {
               cards1.shift();
           }else if(cards2[0] === goal[i]){
               cards2.shift();
           } else {
               answer = 'No'
               break;
           }
        } else {
            answer = 'No'
            break;
        }
    }
    return answer ? answer : 'Yes';
}