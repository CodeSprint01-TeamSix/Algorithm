function solution(progresses, speeds) {
    let days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
    let result = [];
    let currentDeployDay = days[0];
    let count = 1;

    for(let i = 1; i < days.length; i++) {
        if(currentDeployDay >= days[i]) {
            count++;
        } else {
            result.push(count);
            currentDeployDay = days[i]
            count = 1;
        }
    }
    result.push(count)
    
    return result;
}