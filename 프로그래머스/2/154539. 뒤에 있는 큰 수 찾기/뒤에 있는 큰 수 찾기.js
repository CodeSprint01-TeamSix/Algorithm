function solution(numbers) {
    const answer = new Array(numbers.length).fill(-1);

    for (let i = numbers.length - 2; i >= 0; i--) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] < numbers[j]) {
                answer[i] = numbers[j];
                break;
            } else if (numbers[i] >= numbers[j]) {
                if (answer[j] === -1) {
                    answer[i] = -1;
                    break;
                } else if (numbers[i] < answer[j]) {
                    answer[i] = answer[j];
                    break;
                }
            }
        }
    }
    
    return answer;
}

// 첫 번째 풀이
// function solution(numbers) {
//     let answer = []
    
//     for(let i = 0; i < numbers.length; i++) {
//         let found = false;
//         for(let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] < numbers[j]) {
//                 answer.push(numbers[j]);
//                 found = true;
//                 break;
//             }
//         }
//         if(!found) answer.push(-1)
//     }
//     return answer;
// }

// 두 번째 풀이
// function solution(numbers) {
//     let answer = []
    
//     for(let i = 0; i < numbers.length; i++) {
//         let num = -1;
//         for(let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] < numbers[j]) {
//                 num = numbers[j]
//                 break;
//             }
//         }
//         answer.push(num);
//     }
//     return answer;
// }

// 세 번째 풀이
// function solution(numbers) {
//     const answer = Array(numbers.length).fill(-1);
    
//     for(let i = 0; i < numbers.length - 1; i++) {
//         for(let j = i + 1; j < numbers.length; j++) {
//             if(numbers[i] < numbers[j]) {
//                 answer[i] = numbers[j];
//                 break;
//             }
//         }
//     }
//     return answer
// }
