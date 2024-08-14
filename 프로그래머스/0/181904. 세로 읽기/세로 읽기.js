function solution(my_string, m, c) {
    let result = '';
    for(let i = 0; i < my_string.length / m; i++) {
        let newWord = my_string.substr(i*m, m);
        result += newWord[c-1];
    }
    return result;
}