function solution(spell, dic) {
    let result = [];
    
    dic.map(e => {
        let cnt = 0;
        spell.map(el => {
            if(e.includes(el)) cnt++;
        })
        if(spell.length === cnt) {
            result.push(e)
        }
    })
    return result.length === 0 ? 2 : 1;
}