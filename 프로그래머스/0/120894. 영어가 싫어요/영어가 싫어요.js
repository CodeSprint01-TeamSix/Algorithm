function solution(numbers) {
    let numStr = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ]
    
    numStr.forEach((e, i) => {
        numbers = numbers.replaceAll(e, i);
    });
    
    return Number(numbers)
}