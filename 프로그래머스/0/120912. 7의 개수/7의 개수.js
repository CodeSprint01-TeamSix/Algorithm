function solution(array) {
    let arr = [];
    let cnt = 0;
    
    for(let i = 0; i < array.length; i++) {
        let split = [...String(array[i])];
        
        for(let k = 0; k < split.length; k++) {
            if(split[k].includes('7')) cnt++;
        }
    }
    
    return cnt
}

// [...String(array[i])].includes('7')

// function solution(array) {
//     let arr = [];
//     let cnt = 0;
    
//     for(let i = 0; i < array.length; i++) {
//         let split = String(array[i]).split('');
//         console.log(split)
//     }
    
//     return cnt
// }