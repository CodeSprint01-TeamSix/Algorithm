function solution(array, commands) {
    var answer = [];
    commands.forEach(command => {
        //console.log(command)
        //console.log(array.slice(command[0]-1, command[1]).sort((a,b)=> a-b))
        const k = array.slice(command[0]-1, command[1]).sort((a,b)=> a-b)[command[2]-1]
        answer.push(k)
    })
    return answer;
}