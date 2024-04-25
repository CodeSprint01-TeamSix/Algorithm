//function solution(n, left, right) {
  //  var answer = [];
   // const field = Array(n).fill().map(()=>Array(n).fill(0))
   
   // for(let i = 0; i < field.length; i++) {
   //     for(let j = 0; j < field[i].length; j++) {
   //         let max = Math.max(i,j)
   //         field[i][j] = max +1
   //     }
   // }
    
  //   answer = field.join(',').replaceAll(',', '').slice(left, right+1).split('').map(num => Number(num))
  //  return answer;
//}
function solution(n, left, right) {
    let answer = [];

    while(left <= right) {
        let value = [Math.floor(left / n), left % n];
        //console.log('value',value)
        value = Math.max(value[0], value[1]);
        answer.push(value + 1);
        //console.log('answer', answer)
        left += 1;
    }

    return answer;
}