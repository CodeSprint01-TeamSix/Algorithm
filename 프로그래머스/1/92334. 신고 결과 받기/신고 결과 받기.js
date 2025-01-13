function solution(id_list, report, k) {
    let result = Array(id_list.length).fill(0);
    const uniqueReports = [...new Set(report)];
    const dict = {}; // 신고당한 횟수 기록
    const reportersMap = {}; // 유저별 신고 기록
    
    id_list.forEach(id => {
        dict[id] = 0;
        reportersMap[id] = [];
    });
    
    uniqueReports.forEach(e => {
        const reported = e.split(' ')[1];
        const reporter = e.split(' ')[0];
        
        dict[reported]++; // 신고당한 횟수 증가
        reportersMap[reporter].push(reported); // 신고자별 신고 목록 저장
    })
    
    const bannedUsers = new Set(
        id_list.filter(id => dict[id] >= k)
    )
    
    id_list.forEach((user, idx) => {
        result[idx] = reportersMap[user].filter(reported => bannedUsers.has(reported)).length;
    });
    
    return result;
}