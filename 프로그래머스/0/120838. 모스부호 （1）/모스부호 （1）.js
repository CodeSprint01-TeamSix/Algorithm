function solution(letter) {
    let morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    }
    letter = letter + ' ';
    let result = '';
    let temp = '';
    
    for(let i = 0; i < letter.length; i++) {
        if(letter[i] !== ' ') {
            temp += letter[i];
        } else {
            result += morse[temp];
            temp = '';
        }
    }
    return result;
}