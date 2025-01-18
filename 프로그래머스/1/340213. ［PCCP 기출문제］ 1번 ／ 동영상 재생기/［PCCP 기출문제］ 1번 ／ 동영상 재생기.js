function solution(video_len, pos, op_start, op_end, commands) {
    const convertToSeconds = (time) => {
        const [minutes, seconds] = time.split(':').map(e => parseInt(e));
        
        return minutes * 60 + seconds;
    }
    
    const videoLength = convertToSeconds(video_len);
    const openingStartTime = convertToSeconds(op_start);
    const openingEndTime = convertToSeconds(op_end);
    let currentTime = convertToSeconds(pos);
    
    if(currentTime >= openingStartTime && currentTime <= openingEndTime) currentTime = openingEndTime;

    commands.forEach(e => {
        currentTime += e === 'next' ? 10 : -10

        if(currentTime > videoLength) {
            currentTime = videoLength;
        } else if(currentTime < 0) {
            currentTime = 0;
        }
        
        if(currentTime >= openingStartTime && currentTime <= openingEndTime) currentTime = openingEndTime;
    });
    
    const minutes = Math.floor(currentTime / 60).toString().padStart(2, '0');
    const seconds = (currentTime % 60).toString().padStart(2, '0');
    
    return `${minutes}:${seconds}`
}