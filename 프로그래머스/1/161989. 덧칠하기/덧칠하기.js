function solution(n, m, sections) {
    let answer = 0;
    let painted = 0;
    for(let section of sections) {
        if(painted < section) {
            answer++;
            painted = section+m-1;
        }
    }
    return answer;
}

// function solution(n, m, section) {
//     let result = 1;
    
//     for(let i = 0; i < section.length; i++) {
//         for(let j = i+1; j < section.length; j++) {
//             if(Math.abs(section[i] - section[j]) >= m) {
//                 result++;
//                 break;
//             }
//         }
//     }
//     return result;
// }