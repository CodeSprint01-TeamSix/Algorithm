function solution(array, commands) {
    let result = [];
    
    for(let i = 0; i < commands.length; i++) {
        let newArray = array.slice(commands[i][0] - 1, commands[i][1]);
        newArray.sort((a,b) => a - b)
        result.push(newArray[commands[i][2] - 1]);
    }
    
    return result;
}