// /**
//  * @param {number} n
//  * @return {boolean}
//  */
// var isHappy = function(n) {
//     let strN = n.toString()
//     while(n.length !== 1) {
//         n = 0;
//         for(let i = 0; i < strN.length; i++) {
//             n += Math.pow(strN[i]);
//         }
//     }
//     if(n.length === 1) {
//         if(n === 1) {
//             return true;
//         } else {
//             return false;
//         }
//     } else {
        
//     }
// };
var isHappy = function(n) {

    let set = new Set();
    
    //get next number
    const getNext = num =>{
        let res = [], op =0;
        while(num!==0){
            let temp = num%10;
            res.push(temp);
            num = (num-temp)/10;
        }
        
        for(let no of res){
            op+= no*no;
        }
        
        return op;
    }
    
    
    while(n !== 1 && !set.has(n)){
        //add number to set. exit while loop if number exists in set to avoid infinite loop
        set.add(n);
        n = getNext(n);
    }
    
    return n===1
};