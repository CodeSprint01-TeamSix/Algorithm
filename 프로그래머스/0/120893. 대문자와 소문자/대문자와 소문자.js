function solution(my_string) {
    return [...my_string].map((e) => e === e.toUpperCase() ? e.toLowerCase() : e.toUpperCase()).join('');
}

// function solution(my_string) {
//     let result = '';
//     for(let i = 0; i < my_string.length; i++) {
//         if(my_string[i] === my_string[i].toUpperCase()) {
//             result += my_string[i].toLowerCase();
//         } else {
//             result += my_string[i].toUpperCase();
//         }
//     }
//     return result;
// }