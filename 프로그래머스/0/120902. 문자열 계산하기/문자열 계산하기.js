function solution(my_string) {
    my_string = my_string.split(' ')
    let result = 0;
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i] === '+') {
            result += parseInt(my_string[i+1]);
            i++;
        } else if(my_string[i] === '-') {
            result -= parseInt(my_string[i+1]);
            i++;
        } else {
            result += parseInt(my_string[i]);
        }
    }
    return result;
}