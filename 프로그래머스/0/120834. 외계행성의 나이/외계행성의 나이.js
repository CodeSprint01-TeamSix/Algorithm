function solution(age) {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    let result = '';
    let newWord = age.toString().split('')

    for(let i = 0; i < newWord.length; i++) {
        result += arr[newWord[i]];
    }
    return result;
}