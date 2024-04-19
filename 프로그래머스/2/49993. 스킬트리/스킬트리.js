function solution(skill, skill_trees) {
    let result = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        skill_trees[i] = [...skill_trees[i]].filter(e => skill.includes(e)).join('')
        console.log(skill_trees[i], i)
        let sk = skill.substring(0, skill_trees[i].length);
        console.log(sk, i)
        if(skill_trees[i] === sk) {
            result++;
        }
    }
    return result;
}

// 처음에는 join을 사용하지 않고 [...skill]을 사용하여 skill도 배열로 만들고
// skill_trees[i]와 sk가 같은지 비교했는데 [C, B, D] === [C, B, D] 이렇게 해도 
// 배열은 참조타입이기 때문에 일치하지 않아서 join을 사용하여 문자열로 만든 후 일치 연산자를 사용하여 비교했다.
