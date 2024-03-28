function solution(my_string) {
    var answer = [];
    let objects = {};
    let small =  Array.from({length: 26}, (_, i) => String.fromCharCode(i+65))
    let big =  Array.from({length: 26}, (_, i) => String.fromCharCode(i+97))
    let plus = small.concat(big);
    
    
    for(let word of my_string) {
        for(let ss of plus) {
           
            if(ss in objects) {
                if(word === ss) {
                    objects[ss] +=1;
                }   
            } else {
                objects[ss] = 0;
                if(word === ss) {
                    objects[ss] +=1;
                } 
            }
        }
    }
answer= Object.values(objects)
    return answer;
}