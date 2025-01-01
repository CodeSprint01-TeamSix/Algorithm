function solution(n, arr1, arr2) {
    let result = [];
    let temp = '';
    
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            let padded1 = arr1[i].toString(2).padStart(n, '0');
            let padded2 = arr2[i].toString(2).padStart(n, '0');

            if(padded1[j] === '1' || padded2[j] === '1') {
                temp += '#';
            } else if (padded1[j] === '0' && padded2[j] === '0') {
                temp += ' ';
            }
        }
        if(temp.length === n) {
                result.push(temp);
                temp = '';
            }
    }
    return result;
}