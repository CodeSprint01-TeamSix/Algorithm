function solution(todo_list, finished) {
    return todo_list.filter((e, idx) => finished[idx] === false);
}

// function solution(todo_list, finished) {
//     let result = [];
    
//     for(let i = 0; i < todo_list.length; i++) {
//         if(finished[i] === false) {
//             result.push(todo_list[i])
//         }
//     }
//     return result;
// }