function solution(cipher, code) {
    var answer = '';
    let list = []
    for(let i = 0; i < cipher.length; i++) { 
        if((i+1) % code === 0) {
              list.push(cipher[i])
        }
      
    }
    answer = list.join('')
    
    return answer;
}