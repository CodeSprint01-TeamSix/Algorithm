function solution(chicken) {
    let plusChicken = 0;
    
    while(chicken >= 10) {
        if(chicken / 10) {
            plusChicken += Math.floor(chicken / 10);
            chicken = Math.floor(chicken / 10) + chicken % 10;
        } 
    }
    return plusChicken
}
