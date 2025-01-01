function solution(keymap, targets) {
    let result = new Array(targets.length).fill(0);
    let dict = {};
    
    for(let i = 0; i < keymap.length; i++) {
        for(let j = 0; j < keymap[i].length; j++) {
            if(dict[keymap[i][j]]) {
                dict[keymap[i][j]] = Math.min(dict[keymap[i][j]], j + 1);
            } else {
                dict[keymap[i][j]] = j + 1;
            }
        }
    }

    for(let i = 0; i < targets.length; i++) {
        let plus = 0;
        for(let j = 0; j < targets[i].length; j++) {
            if(dict[targets[i][j]]) {
                result[i] += dict[targets[i][j]];   
            } else {
                result[i] = -1;
                break;
            }
        }
    }
    
    return result;
}