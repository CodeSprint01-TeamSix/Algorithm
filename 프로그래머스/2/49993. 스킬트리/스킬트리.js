function solution(skill, skill_trees) {
    let result = 0;
    
    for(let i = 0; i < skill_trees.length; i++) {
        skill_trees[i] = [...skill_trees[i]].filter(e => skill.includes(e)).join('');
        
        if(skill_trees[i] === skill.substr(0, skill_trees[i].length)) result++;
    }

    return result;
}