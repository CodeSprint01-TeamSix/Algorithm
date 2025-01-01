// function solution(elements) {
//     let set = new Set();
//     let arr = [...elements, ...elements]
//     console.log(arr)
    
//     for(let i = 1; i <= elements.length; i++) {
//         for(let j = 0; j < elements.length; j++) {
//             set.add(arr.slice(j, j+i).reduce((a,b) => a + b, 0));
//         }
//     }

//     return set.size;
// }


function solution(elements) {
    let result = [];
    let arr = [...elements, ...elements]
    
    for(let i = 1; i <= elements.length; i++) {
        for(let j = 0; j < elements.length; j++) {
            result.push(arr.slice(j, j+i).reduce((prev, cur) => (prev + cur), 0))
        }
    }
    let set = new Set(result)
    return set.size
}

