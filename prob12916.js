// https://programmers.co.kr/learn/courses/30/lessons/12916

function solution(s){
    var answer = pWithYNum(s);
    return answer;
}

function pWithYNum(s) {
	let pNum = 0, yNum = 0;
	s = s.toLowerCase();
	for(var val of s) {
		if(val == 'p') {
			pNum = pNum+1;
		} else if(val == 'y') {
			yNum = yNum+1;
		}
	}
	let numCompareWithFlg = false;
	if(pNum == yNum) {
		numCompareWithFlg = true;
	}
	return numCompareWithFlg;
}
s = 'pPoooyY';
console.log(solution(s));
s = '-Pyy';
console.log(solution(s));
