function solution(n, words) {
    var answer = [];
    const say_word = []
    say_word.push(words[0])
    for(let i = 1; i < words.length; i++) {
        const start_word = words[i][0]
        const end_word = say_word[i-1][say_word[i-1].length -1]

        if(say_word.includes(words[i]) || start_word !== end_word) {
            return answer = [i % n +1, Math.ceil((i+1)/n)]
        } 
        
        say_word.push(words[i])
       
    }
    answer =  [0,0]
    return answer;
}