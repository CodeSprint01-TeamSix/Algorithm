function solution(s) {
    // let result = '';
    s = s.split(' ')
    
//     for(let i = 0; i < s.length; i++) {
//         s[i] = Number(s[i])
//     }
    
//     s.sort((a,b) => a - b);
    
//     result += (s[0]).toString();
//     result += ' ' + (s[s.length - 1]).toString();

//     return result;
    return Math.min(...s) + ' ' + Math.max(...s)
}
