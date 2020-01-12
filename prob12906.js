// https://programmers.co.kr/learn/courses/30/lessons/12906
// https://velog.io/@marcus/ 참조

function solution(arr)
{
    var answer = sameDigitHate(arr);
    return answer;
}

function sameDigitHate(arr) {
	let result = [];
	result = arr.filter((val, index) => val !== arr[index+1]);
	return result;
}

arr = [1,1,3,3,0,1,1];
console.log(solution(arr));
arr = [4,4,4,3,3];
console.log(solution(arr));
