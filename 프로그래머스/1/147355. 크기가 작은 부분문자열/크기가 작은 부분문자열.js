function solution(t, p) {
    var answer = 0;
    for(let i = 0; i < t.length; i++) {
        const slice_t = t.slice(i,p.length+i)
        if(slice_t.length === p.length && Number(slice_t) <= Number(p)) answer++
    }
    return answer;
}