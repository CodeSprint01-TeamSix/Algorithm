function solution(participant, completion) {
    var answer = '';
    const participants = new Map()
    // 플레이어 등록, 이름이 중복일 경우 +1씩
    participant.forEach(player => {
        if(participants.has(player)) {
             participants.set(player, participants.get(player)+1)
        } else {
            participants.set(player, 1)
        }
    })
    // 완주자일 경우 -1
    completion.forEach(player => {
        if(participants.has(player)) {
            participants.set(player, participants.get(player)-1)
        }
    })
    // 완주 실패일 경우. value 값에 1이상 있는 프로퍼티만 출력
    for(let [key, value] of participants) {
        if(value === 1) {
            answer += key
        }
       
    }
    return answer;
}



//function solution(participant, completion) {
   // var answer = '';
    //const participants = new Set(completion)
    //participant.forEach((player,index) => participants.set(player,index))
    //console.log('participants', participants, [...participants])
   // for(let player of participant) {
        //console.log(player, [...participants].includes(player) )
      //  if([...participants].includes(player) ) {
      //      participants.delete(player)
      //  }else {
          //console.log(player)
       //     answer += player
      //  }
   // }
  //  return answer;
// }