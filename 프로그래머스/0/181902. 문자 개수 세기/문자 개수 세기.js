function solution(my_string) {
    let result = Array(52).fill(0)
    
    for(let i = 0; i < my_string.length; i++) {
        if(my_string[i].charCodeAt(0) >= 65 &&  my_string[i].charCodeAt(0) <= 90) {
            result[my_string[i].charCodeAt(0) - 65]++;   
        } else {
            result[my_string[i].charCodeAt(0) - 71]++; 
        }
    }
    return result;
}