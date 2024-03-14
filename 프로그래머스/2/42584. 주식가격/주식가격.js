function solution(prices) {
    var answer = [];
    let count = 0;
   
   for(let i=0; i < prices.length; i++) {
       for(let j = i+1; j < prices.length; j++) {
        count+=1
          if(prices[i] > prices[j]) {
              break;
           }
       }

       answer.push(count)
       count = 0;

   }
    
    return answer;
}