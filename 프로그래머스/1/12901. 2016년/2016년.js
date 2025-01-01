function solution(a, b) {
    let cnt = 0;
    
    let day = {
        1: 31, 2: 29, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31,
    }
    let weekend = {
        0: 'THU', 1: 'FRI', 2: 'SAT', 3: 'SUN', 4: 'MON', 5: 'TUE', 6: 'WED',
    }
    
    for(let i = 1; i < a; i++) {
        cnt += day[i]
    }
    
    return weekend[(cnt + b) % 7];
}