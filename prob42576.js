function solution(participant, completion){
    participant.sort();
    completion.sort();
    var participantLen = participant.length;
    for(var i=0; i<participantLen; i++){
        if(participant[i] != completion[i]){
            return participant[i];
        }
    }
}
participant = ["leo", "kiki", "eden"];
completion = ["eden", "kiki"];
console.log(solution(participant, completion));