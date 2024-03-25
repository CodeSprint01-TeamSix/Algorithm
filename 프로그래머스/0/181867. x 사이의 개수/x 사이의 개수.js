function solution(myString) {
    myString = myString.split('x');
    let result = [];
    
    for(let i = 0; i < myString.length; i++) {
        result.push(myString[i].length);
    }
    return result;
}