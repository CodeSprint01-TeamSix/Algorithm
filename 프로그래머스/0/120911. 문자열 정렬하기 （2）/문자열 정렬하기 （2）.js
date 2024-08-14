function solution(my_string) {
    let Lower = my_string.toLowerCase();
    return [...Lower].sort().join('');
}