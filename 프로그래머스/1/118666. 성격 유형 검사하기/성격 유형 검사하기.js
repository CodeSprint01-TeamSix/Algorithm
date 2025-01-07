function solution(survey, choices) {
    let result = '';
    const dict = {
        'R': 0, 'T': 0, 'C': 0, 'F': 0, 'J': 0, 'M': 0, 'A': 0, 'N': 0,  
    };
    
    for(let i = 0; i < choices.length; i++) {
        if(choices[i] < 4) {
            dict[survey[i][0]] += 4 - choices[i];
        } else if(choices[i] > 4) {
            dict[survey[i][1]] += choices[i] - 4;
        }
    }
    
    const types = ["RT", "CF", "JM", "AN"];
    
    for(const type of types) {
        const [first, second] = type;
        
        if(dict[first] > dict[second]) {
            result += first;
        } else if(dict[first] < dict[second]) {
            result += second;
        } else {
            result += first;
        }
    }
    
    return result;
}