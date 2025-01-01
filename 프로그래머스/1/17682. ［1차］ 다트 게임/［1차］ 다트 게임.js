function solution(dartResult) {
    let point = [];
    let temp = '';
    
    for(let i = 0; i < dartResult.length; i++) {
        if(!isNaN(dartResult[i])) {
            temp += dartResult[i];
        } else {
            switch (dartResult[i]) {
                case 'S':
                    point.push(Math.pow(parseInt(temp), 1));
                    break;
                case 'D':
                    point.push(Math.pow(parseInt(temp), 2));
                    break;
                case 'T':
                    point.push(Math.pow(parseInt(temp), 3));
                    break;
                case '*':
                    if(point.length > 1) {
                        point[point.length - 1] *= 2;
                        point[point.length - 2] *= 2;
                    } else {
                        point[point.length - 1] *= 2;
                    }
                    break;
                case '#':
                    point[point.length - 1] *= -1;
                    break;
            }
            temp = '';
        }
    }
    
    return point.reduce((prev, cur) => prev + cur, 0);
}