function solution(today, terms, privacies) {
    let dict = new Map();
    let result = [];
    let term;
    let privacy;
    
    today = today.split('.');
    
    for(let i = 0; i < terms.length; i++) {
        const expiration = terms[i].split(' ');
        
        dict.set(expiration[0], parseInt(expiration[1]));
    }
    
    for(let i = 0; i < privacies.length; i++) {
        term = privacies[i].substr(-1);
        privacy = privacies[i].substr(0, 10).split('.');
        
        const year = (parseInt(today[0]) - parseInt(privacy[0])) * 12 + parseInt(today[1]);
        const month = parseInt(privacy[1]) + dict.get(term);
        const date = today[2] >= privacy[2];
        
        if(year > month) {
            result.push(i+1);
        } else if(year === month) {
            if(date) {
                result.push(i+1);
            }
        }
    }
    
    return result;
}