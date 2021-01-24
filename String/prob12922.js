// https://programmers.co.kr/learn/courses/30/lessons/12922

function solution(n) {
    var answer = waterMelon(n);
    return answer;
}

function waterMelon(n) {
	let waterMelonStr = '';
	for(var i = 0; i < n; i = i + 2) {
		waterMelonStr += '수박';
	}
	if(n % 2 == 1) {
		waterMelonStr = waterMelonStr.substring(0, n);
	}
	return waterMelonStr;
}
n = 3;
console.log(solution(n));
n = 4;
console.log(solution(n));
