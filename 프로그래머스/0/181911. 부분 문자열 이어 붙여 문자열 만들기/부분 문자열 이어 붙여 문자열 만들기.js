function solution(my_strings, parts) {
    return my_strings.map((e, idx) => e.slice(parts[idx][0], parts[idx][1] + 1)).join('')
}

// function solution(my_strings, parts) {
//     let result = '';
    
//     for(let i = 0; i < my_strings.length; i++) {
//         result += my_strings[i].substring(parts[i][0], parts[i][1] + 1);
//     }
//     return result;
// }