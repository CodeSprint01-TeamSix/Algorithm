function solution(numbers, hand) {
    let result = '';
    const keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };

    let left = '*';
    let right = '#';
    
    function getDistance(x, y) {
        return Math.abs(x[0] - y[0]) + Math.abs(x[1] - y[1]);
    }
    
    for(const number of numbers) {
        if([1, 4, 7].includes(number)) {
            result += 'L';
            left = number;
        } else if ([3, 6, 9].includes(number)) {
            result += 'R';
            right = number;
        } else {
            if(getDistance(keypad[number], keypad[left]) > getDistance(keypad[number], keypad[right])) {
                result += 'R';
                right = number;
            } else if(getDistance(keypad[number], keypad[left]) < getDistance(keypad[number], keypad[right])) {
                result += 'L';
                left = number;
            } else {
                if(hand === 'right') {
                    result += 'R';
                    right = number;
                } else {
                    result += 'L';
                    left = number;
                }
            }
        }
    }
    
    return result;
}