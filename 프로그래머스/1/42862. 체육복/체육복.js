function solution(n, lost, reserve) {
    // 본인 것 제외하고 빌려줄 수 있는 사람과 여분의 체육복도 없는 사람 구하기
    const lostOnly = new Set(lost.filter(e => !reserve.includes(e)).sort((a,b) => a - b)); // 진짜 잃어버린 사람
    const reserveOnly = new Set(reserve.filter(e => !lost.includes(e)).sort((a,b) => a - b)); // 여분 있는 사람
    
    reserveOnly.forEach(res => {
        const front = res - 1;
        const behind = res + 1;
        
        if(lostOnly.has(front)) {
            lostOnly.delete(front);
        } else if(lostOnly.has(behind)) {
            lostOnly.delete(behind);
        }
    })
    
    return n - lostOnly.size;
}