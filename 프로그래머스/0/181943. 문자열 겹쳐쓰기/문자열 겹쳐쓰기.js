function solution(my_string, overwrite_string, s) {
    my_string = [...my_string];
    overwrite_string = [...overwrite_string]
    for(let i = 0; i < overwrite_string.length; i++) {
        my_string[i + s] = overwrite_string[i];
    }
    return my_string.join('');
}

//my_string의 인덱스 s부터 overwrite_string.length까지를 overwrite_string으로 변경