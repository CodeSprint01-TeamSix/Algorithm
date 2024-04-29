function solution(s) {
    let result = [];
    let newArr = s.replace('{{', '').replace('}}', '').split('},{');
    newArr.sort((a,b) => a.length - b.length);
    
    for(let i = 0; i < newArr.length; i++) {
        let tuple = newArr[i].split(',');
        for(let j = 0; j < tuple.length; j++) {
            let num = parseInt(tuple[j]);
            result.push(num);
        }
    }
    result = [...new Set(result)]
    return result;
}
