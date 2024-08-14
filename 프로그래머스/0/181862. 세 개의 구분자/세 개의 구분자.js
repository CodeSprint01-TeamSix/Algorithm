function solution(myStr) {
    myStr = myStr.replaceAll('a', ' ').replaceAll('b', ' ').replaceAll('c', ' ')
    let splitStr = myStr.split(' ').filter(e => e !== '');
    console.log(splitStr)
    
    return splitStr.length !== 0 ? splitStr : ['EMPTY'];
}