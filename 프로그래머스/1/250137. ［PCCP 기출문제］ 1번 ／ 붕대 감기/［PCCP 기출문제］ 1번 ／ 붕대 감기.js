function solution(bandage, health, attacks) {
    const [consecutiveTurns, normalHeal, bonusHeal] = bandage;
    let currentTurn = 0;
    let currentHealth = health;
    
    for(const [attackTime, damage] of attacks) {
        let healTime = attackTime - 1 - currentTurn;
        currentHealth = currentHealth + normalHeal * healTime;
        
        while(healTime >= consecutiveTurns) {
            currentHealth += bonusHeal;
            healTime -= consecutiveTurns;
        }
        
        if(currentHealth >= health) currentHealth = health
        currentHealth -= damage;
        currentTurn = attackTime;
        
        if(currentHealth <= 0) return -1;
    }
    
    return currentHealth > 0 ? currentHealth : -1;
}