function solution(myString, pat) {
    for(let i = 0; i < myString.length; i++) {
        if(!myString.endsWith(pat)) {
            myString = myString.slice(0, -1);
        }
    }
    return myString;
}