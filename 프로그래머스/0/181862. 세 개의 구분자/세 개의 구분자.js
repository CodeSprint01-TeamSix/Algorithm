function solution(myStr) {
    var answer = [];
    const regex = /a|b|c/g
    const new_myStr = myStr.replace(regex,',').split(',')
    const search_str = new_myStr.filter(str => str !== '')
    answer = search_str.length > 0 ? search_str : ["EMPTY"]
    //console.log(myStr.match(/[^a-c]+/g))
    return answer;
}