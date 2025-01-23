function solution(fees, records) {
    let result = [];
    let dict = new Map();
    
    const lastOutTime = 23 * 60 + 59;
    const [minimumTime, minimumFee, extraTime, extraFee] = fees;
    
    records = records.map(record => {
        const [time, car, type] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        
        return [hour * 60 + minute, car, type];
    })
    
    for(let [time, car, type] of records) {
        if(!dict.has(car)) dict.set(car, { total: 0, lastIn: null });
        
        const carData = dict.get(car);
        
        if(type === 'IN') {
            carData.lastIn = time;
        } else {
            carData.total += time - carData.lastIn;
            carData.lastIn = null;
        }
    }
    
    for(let [car, carData] of dict) {
        if(carData.lastIn !== null) {
            carData.total += lastOutTime - carData.lastIn;
            carData.lastIn = null;
        }
    }
    
    [...dict]
        .sort((a, b) => a[0] - b[0])
        .forEach(e => {
        const car = e[0];
        const carData = e[1];
        
        if(carData.total > minimumTime) {
            result.push(minimumFee + Math.ceil((carData.total - minimumTime) / extraTime) * extraFee);
        } else {
            result.push(minimumFee);
        }
    })
    
    return result;
}
