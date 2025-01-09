function solution(wallpaper) {
    let result = [];
    let minY = 50;
    
    for(let i = 0; i < wallpaper.length; i++) {
        if(wallpaper[i].includes('#')) {
            result.push(i);
            break;
        }
    }
    
    for(let i = 0; i < wallpaper.length; i++) {
        for(let j = 0; j < wallpaper[i].length; j++) {
            if(wallpaper[i][j] === '#' && minY > j) {
                minY = j;
                break;
            }
        }
    }
    result.push(minY);
    
    for(let i = wallpaper.length - 1; i >= 0; i--) {
        if(wallpaper[i].includes('#')) {
            result.push(i+1);
            break;
        }
    }
    
    let maxX = 0;
    
    for(let i = wallpaper.length - 1; i >= 0; i--) {
        for(let j = wallpaper[i].length - 1; j >= 0; j--) {
            if(wallpaper[i][j] === '#' && maxX < j+1) {
                maxX = j+1;
                break;
            }
        }
    }
    result.push(maxX);
    
    return result;
}