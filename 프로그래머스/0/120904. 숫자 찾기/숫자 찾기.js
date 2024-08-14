function solution(num, k) {
    if([...String(num)].includes(String(k))) {
        return [...String(num)].findIndex((e) => e === String(k)) + 1;   
    }
    return -1;
}