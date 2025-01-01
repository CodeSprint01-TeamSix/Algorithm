// function solution(s) {
//     let num = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let answer = s;
    
//     for(let i = 0; i < num.length; i++){
//         let arr = answer.split(num[i]);
//         answer = arr.join(i);
        
//     }
//     return parseInt(answer);
// }

function solution(s) {
    let temp = '';
    let result = '';
    
    let dict = {'zero': '0', 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9'}
    
    for(let i = 0; i < s.length; i++) {
        temp += s[i];
        if(dict[temp] === undefined) {
            if(!isNaN(temp)) {
                result += temp;
                temp = '';
            }
        } else {
            result += dict[temp]
            temp = '';
        }
    }
    return parseInt(result);
}