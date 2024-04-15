function solution(maps) {
    var answer = 0;
    const row_len = maps.length;
    const col_len = maps[0].length;
    const dr = [0, 1, 0, -1]
    const dc = [1, 0, -1, 0]
    
    // 필드 생성
    const distance = Array(row_len).fill().map(()=>Array(col_len).fill(0))
    // 큐생성 / 초기화
    const q = [[0,0]]
    distance[0][0] = 1 // 현재 위치

    
    function isValid(r, c) {
        return r >= 0 && r < row_len && c >= 0 && c < col_len && maps[r][c] === 1
    }
    
    while(q.length) {
        //console.log(q)
        //console.log(distance)
        const [cur_r, cur_c] = q.shift();
        if(cur_r === row_len-1 && cur_c === col_len -1) {
            return answer = distance[cur_r][cur_c]
        }
        for(let i = 0; i < 4; i++) {
            const next_r = cur_r + dr[i]
            const next_c = cur_c + dc[i]
            if(isValid(next_r, next_c)) {
                if(distance[next_r][next_c] === 0) {
                    distance[next_r][next_c] =  distance[cur_r][cur_c] + 1
                    q.push([next_r, next_c])
                }
                
            }
        }
        
    }
     answer = -1
    return answer;
}