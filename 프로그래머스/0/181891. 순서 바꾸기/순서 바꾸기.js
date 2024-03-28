function solution(num_list, n) {
    var answer = [];
    const n_after= num_list.slice(n)
    num_list.splice(n, num_list.length - n)
    answer = [...n_after,...num_list]
    return answer;
}