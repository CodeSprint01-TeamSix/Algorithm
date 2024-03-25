function solution(rsp) {
    let result = '';
    const win = {
        0: 5,
        2: 0,
        5: 2,
    }
    for(let i = 0; i < rsp.length; i++) {
        result += win[rsp[i]]
    }
    return result;
}