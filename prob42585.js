//https://programmers.co.kr/learn/courses/30/lessons/42585

function solution(arrangement){
    var stickCurrentCnt = 0, stickAccumulateResultCnt = 0;
    var laserLen = arrangement.length;
    for(var i=0; i<laserLen; i++){
    	if(arrangement[i] == '('){
    		stickCurrentCnt++;
    	} else{
    		stickCurrentCnt--;
    		if(arrangement[i-1] == ')'){
    			stickAccumulateResultCnt += 1;
    		} else{
    			stickAccumulateResultCnt += stickCurrentCnt;
    		}
    	}
    }
    return stickAccumulateResultCnt;
}

var arrangement = "()(((()())(())()))(())";
console.log(solution(arrangement));