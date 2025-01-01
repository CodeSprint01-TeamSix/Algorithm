function solution(array) {
    let dict = {};
    
    for(let i = 0; i < array.length; i++) {
        dict[array[i]] = (dict[array[i]] || 0) + 1;
    }
    
    let freqKey = 0;
    let freqValue = 0;
    let same = false;
    
    for(let [key, value] of Object.entries(dict)) {
        if(freqValue < value) {
            freqKey = key;
            freqValue = value;
            same = false;
        } else if(freqValue === value) {
            same = true;
        }
    }
    
    return same ? -1 : parseInt(freqKey);
}