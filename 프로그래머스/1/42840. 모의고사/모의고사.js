function solution(answers) {
    let one = [1,2,3,4,5];
    let two = [2,1,2,3,2,4,2,5];
    let three = [3,3,1,1,2,2,4,4,5,5];
    let dict = {1: 0, 2: 0, 3: 0};
    let maxCount = 0;
    let result = [];
    
    for(let i = 0; i < answers.length; i++) {
        if(one.length < answers.length) {
            one = [].concat(...Array(Math.ceil(answers.length / one.length)).fill(one));
        } else if(two.length < answers.length) {
            two = [].concat(...Array(Math.ceil(answers.length / two.length)).fill(two));
        } else if(three.length < answers.length) {
            three = [].concat(...Array(Math.ceil(answers.length / three.length)).fill(three));
        }
        
        if(answers[i] === one[i]) {
            dict[1]++;
        }
        if(answers[i] === two[i]) {
            dict[2]++;
        } 
        if(answers[i] === three[i]) {
            dict[3]++;
        }
    }
    maxCount = Math.max(dict[1], dict[2], dict[3]);

    if(dict[1] === maxCount) {
        result.push(1);
    } 
    if(dict[2] === maxCount) {
        result.push(2);
    } 
    if(dict[3] === maxCount) {
        result.push(3);
    }
            
    return result;
}