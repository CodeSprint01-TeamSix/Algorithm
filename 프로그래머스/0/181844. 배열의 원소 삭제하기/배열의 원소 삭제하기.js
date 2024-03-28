function solution(arr, delete_list) {
    var answer = [];
    answer = arr.filter((list)=> !delete_list.includes(list))
    return answer;
}