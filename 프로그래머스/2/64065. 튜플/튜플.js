function solution(s) {
    let result = [];
    
    s = s.replace('{{', '').replace('}}', '').split('},{').sort((a,b) => a.length - b.length);
    
    for(let i = 0; i < s.length; i++) {
        let element = s[i].split(',').map(e => parseInt(e));
        
        element.forEach(e => {
            if(!result.includes(e)) result.push(e);
        });
    }
    return result;
}