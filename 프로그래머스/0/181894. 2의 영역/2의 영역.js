function solution(arr) {
    let start = arr.indexOf(2)
    console.log(start)
    
    let end = arr.lastIndexOf(2)
    console.log(end)
    
    if(start === -1) return [-1];
    else return arr.slice(start, end + 1);
}