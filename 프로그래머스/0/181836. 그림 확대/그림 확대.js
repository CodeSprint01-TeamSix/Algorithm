function solution(picture, k) {
    let result = [];
    
    picture.map(e => {
        // console.log([...e].map(el => el.repeat(k)));
        for(let i = 0; i < k; i++) {
            result.push(([...e].map(el => el.repeat(k))).join(''))   
        }
    })
    return result;
}