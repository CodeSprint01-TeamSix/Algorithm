function solution(my_string, indices) {
    var answer = '';
    const array =indices.sort((a,b) => b -a)
    const split_string = my_string.split("")
    array.forEach(list => split_string.splice(list, 1))
    answer = split_string.join('')
    return answer;
}