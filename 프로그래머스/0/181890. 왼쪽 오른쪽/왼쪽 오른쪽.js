function solution(str_list) {
    const indexL = str_list.indexOf('l');
    const indexR = str_list.indexOf('r');
    
    if(indexL !== -1 && indexR !== -1) {
        if(indexL < indexR) {
            return str_list.slice(0, str_list.indexOf('l'));
        } else if(indexL > indexR) {
            return str_list.slice(str_list.indexOf('r')+1);
        }
    }
    
    if(indexL !== -1) {
        return str_list.slice(0, str_list.indexOf('l'));
    } else if(indexR !== -1) {
        return str_list.slice(str_list.indexOf('r')+1);
    } else {
        return [];
    }
}