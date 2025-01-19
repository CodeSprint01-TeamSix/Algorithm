function solution(n, left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n); // 행 번호
        const col = i % n;            // 열 번호
        result.push(Math.max(row, col) + 1);
    }
    return result;
}