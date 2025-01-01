function solution(name, yearning, photo) {
    let dict = {};
    let result = Array(photo.length).fill(0);
    
    for(let i = 0; i < name.length; i++) {
        dict[name[i]] = yearning[i];
    }
    
    for(let i = 0; i < photo.length; i++) {
        for(let j = 0; j < photo[i].length; j++) {
            if(dict[photo[i][j]] === undefined) result[i] += 0
            else result[i] += dict[photo[i][j]];
        }
    }
    return result;
}