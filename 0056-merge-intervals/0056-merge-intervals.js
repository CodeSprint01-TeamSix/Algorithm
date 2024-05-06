/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]); // 시작점을 기준으로 intervals 배열을 정렬
    
    const merged = []; // 결과를 저장할 배열
    
    for (let i = 0; i < intervals.length; i++) {
        const currentInterval = intervals[i];
        
        if (merged.length === 0 || currentInterval[0] > merged[merged.length - 1][1]) {
            // merged 배열이 비어있거나 현재 구간이 merged 배열의 마지막 구간과 겹치지 않는 경우
            merged.push(currentInterval);
        } else {
            // 현재 구간과 merged 배열의 마지막 구간이 겹치는 경우, 구간을 병합하여 갱신
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], currentInterval[1]);
        }
    }
    
    return merged;
};
// 먼저, intervals 배열을 시작점을 기준으로 정렬
// merged 배열에 첫 번째 구간을 추가
// intervals 배열을 순회하면서 현재 구간과 merged 배열의 마지막 구간을 비교
// 만약 현재 구간과 merged 배열의 마지막 구간이 겹치지 않는다면 현재 구간을 merged 배열에 추가
// 겹친다면, 두 구간을 병합하여 merged 배열의 마지막 구간을 갱신
// 병합된 구간이 저장된 merged 배열을 반환


// var merge = function(intervals) {
//     for(let i = 0; i < intervals.length-1; i++) {
//         if(intervals[i][1] > intervals[i+1][0] && intervals[i][1] < intervals[i+1][1]) {
//             intervals[i+1][0] = intervals[i][0];
//             // console.log(intervals)
//             intervals.shift();
//             // console.log(intervals)
//         }
//     }
//     return intervals;
// };
