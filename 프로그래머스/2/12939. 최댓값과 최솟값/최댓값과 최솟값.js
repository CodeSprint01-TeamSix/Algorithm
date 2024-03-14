function solution(s) {
    var answer = '';
    const sortNum = s.split(' ').sort((a,b) => a-b)
    const minMax = sortNum.filter((_,index) => {return index === 0 || index === sortNum.length -1 }).join(' ')
    answer = minMax
    return answer;
}