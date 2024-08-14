function solution(emergency) {
    let result = [];
    let originalArr = [...emergency];
    emergency.sort((a,b) => b - a);
    
    console.log(originalArr)
    console.log(emergency)
    
    for(let i = 0; i < originalArr.length; i++) {
        let cnt = 1;
        for(let j = 0; j < emergency.length; j++) {
            if(originalArr[i] === emergency[j]) {
                result.push(cnt);
            } else {
                cnt++;
            }
        }
    }
    return result;
}