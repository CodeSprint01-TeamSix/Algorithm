function solution(msg) {
    let dictionary = {};
    let lastIndex = 26;
    let result = [];
    
    for(let i = 1; i <= 26; i++) {
        dictionary[String.fromCharCode(i + 64)] = i;
    }
    
    let i = 0;
    while(msg.length > i) {
        let word = msg[i];
        let j = i + 1;
        
        while(msg.length >= j && dictionary[word]) {
            if(msg.length === j) break;
            let nextWord = word + msg[j];
            if(!dictionary[nextWord]) break;
            word = nextWord;
            j++;
        }
        
        result.push(dictionary[word]);
        
        dictionary[word + msg[j]] = ++lastIndex;
        
        i += word.length;
    }
    
    return result;
}