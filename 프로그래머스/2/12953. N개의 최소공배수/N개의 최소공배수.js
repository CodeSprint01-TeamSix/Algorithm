function solution(arr) {
    var answer = 0;

    //while(true) {
       //if((lcm % 2 === 0) && (lcm % 8 === 0)) break;
        //lcm++;
   // }
    //console.log(lcm)
    let num1 = arr[0]
   for(let i = 1; i < arr.length; i++) {
       num1 = lcm(num1, arr[i])
       
   }
   answer = num1
    return answer;
}

function gcd(a,b) {
    let value = a % b
    if(value === 0) return b;
    
    return gcd(b, a % b)
}

function lcm(a, b){
    return a * b / gcd(a,b)
}