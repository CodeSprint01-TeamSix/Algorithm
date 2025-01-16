function solution(bandage, health, attacks) {
    const [consecutiveTurn, healPerSec, bonusHeal] = bandage;
    let currentHealth = health;
    let attackTime = 0;
    
    for(let [attackTurn, damage] of attacks) {
        let healTime = attackTurn - attackTime - 1;
        
        currentHealth += healPerSec * healTime;
        
        while(healTime >= consecutiveTurn) {
            currentHealth += bonusHeal;
            healTime -= consecutiveTurn;
        }
        
        if(currentHealth > health) currentHealth = health;
        
        currentHealth -= damage;
        
        if(currentHealth <= 0) return -1;
        
        attackTime = attackTurn;
    }
    
    return currentHealth;
}
