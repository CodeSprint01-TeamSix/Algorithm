function solution(my_string, s, e) {
    my_string = [...my_string];
    
    let newString = my_string.slice(s, e+1).reverse();
    
    return my_string.slice(0, s).join('') + newString.join('') + my_string.slice(e+1).join('');
}