//아메리카노 4500, 카페라테 5000
// 아무거나 == 차가운 아메리카노
//메뉴만 == 차가운것

function solution(orders) {
    var answer = 0;
    orders.forEach(order => {
        if(order.indexOf('americano') > -1 ) {
            answer += 4500
        } else if(order.indexOf('cafelatte') > -1) {
            answer += 5000
        } else {
            answer += 4500
        }
    })
    return answer;
}