function solution(myString, pat) {
    var answer = 0;
    let list = []
    for(let i = 0; i < myString.length; i++) {
        const check = myString.slice(i,i+pat.length).indexOf(pat)
        console.log(check)
        if(check !== -1) {
            answer += 1
        }
    }

    return answer;
}