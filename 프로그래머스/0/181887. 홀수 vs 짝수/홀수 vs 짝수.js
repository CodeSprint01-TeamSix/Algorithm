function solution(num_list) {
    let odd = 0;
    let even = 0;
    
    num_list.forEach((e, idx) => (idx%2) === 0 ? odd += e : even += e);
    
    return Math.max(odd, even);
}

// function solution(num_list) {
//     let odd = 0;
//     let even = 0;
    
//     for(let i = 0; i < num_list.length; i++) {
//         if(i % 2 === 0) {
//             odd += num_list[i];
//         } else {
//             even += num_list[i];
//         }
//     }
//     return Math.max(odd, even);
// }