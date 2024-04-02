function solution(answers) {
    let no1 = [1,2,3,4,5]
    no1 = [].concat(...Array(2000).fill(no1))
    let no2 = [2,1,2,3,2,4,2,5];
    no2 = [].concat(...Array(1250).fill(no2))
    let no3 = [3,3,1,1,2,2,4,4,5,5];
    no3 = [].concat(...Array(1000).fill(no3))
    let one = 0;
    let two = 0;
    let three = 0;
    
    for(let i = 0; i < answers.length; i++) {
        if(no1[i] === answers[i]) {
            one++;
        }
        if(no2[i] === answers[i]) {
            two++;
        }
        if(no3[i] === answers[i]) {
            three++;
        }
    }
    
    const maxCount = Math.max(one, two, three);
    let result = [];
    
    if (maxCount === one) {
        result.push(1);
    } 
    if (maxCount === two) {
        result.push(2);
    } 
    if (maxCount === three) {
        result.push(3);
    }
    return result;
}