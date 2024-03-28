function solution(todo_list, finished) {
    var answer = [];
    answer = todo_list.filter((list, index) => !finished[index])
    return answer;
}