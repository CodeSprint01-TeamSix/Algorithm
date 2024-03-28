function solution(hp) {  
    let result = 0;
    
    while(hp > 0) {        
        if(hp >= 5) {
            result += Math.floor(hp/5);
            hp = hp%5;
        } else if(hp >= 3) {
            result += Math.floor(hp/3);
            hp = hp % 3;
        } else {
            result += hp;
            hp = 0;
        }
    }
    return result;
}