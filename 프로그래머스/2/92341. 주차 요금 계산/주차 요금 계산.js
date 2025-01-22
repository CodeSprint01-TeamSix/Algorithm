function solution(fees, records) {
    let result = [];
    let dict = new Map();
    
    const lastOutTime = 23 * 60 + 59; // 23시 59분까지 출차가 되지 않은 경우
    const [minimumFareTimePerMinute, minimumFare, extraPostageTimePerMinute, extraPostage] = fees;
    
    records = records.map(record => {
        const [time, car, type] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        return [hour * 60 + minute, car, type];
    });
    
    // 차량별 입출차 기록 및 주차 시간 누적
    for(const [time, car, type] of records) {
        if(!dict.has(car)) {
            dict.set(car, { total: 0, lastIn: null});
        }
        
        const carData = dict.get(car);
        
        if(type === 'IN') {
            carData.lastIn = time; // 입차 시간 기록
        } else {
            carData.total += time - carData.lastIn; // 누적 주차 시간 계산
            carData.lastIn = null; // 출차 처리
        }
    }
    
    // 출차 기록이 없는 차량 처리
    for(const [car, carData] of dict) {
        if(carData.lastIn !== null) {
            carData.total += lastOutTime - carData.lastIn;
            carData.lastIn = null;
        }
    }
    
    // 요금 계산
    [...dict]
        .sort((a, b) => a[0] - b[0])
        .forEach(e => {
        const car = e[0];
        const total = e[1].total;
        
        let fee;
        
        if(total <= minimumFareTimePerMinute) {
            fee = minimumFare;
        } else {
            const extraTime = total - minimumFareTimePerMinute;
            fee = minimumFare + Math.ceil(extraTime / extraPostageTimePerMinute) * extraPostage;
        }
        
        result.push(fee);
    })
    
    return result;
}
