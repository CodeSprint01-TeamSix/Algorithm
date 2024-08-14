function solution(my_string, indices) {
    my_string = [...my_string]
    for(let i = 0; i < indices.length; i++) {
        my_string[indices[i]] = '';
    }
    return my_string.join('');
}