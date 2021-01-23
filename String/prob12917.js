// https://programmers.co.kr/learn/courses/30/lessons/12917
// https://velog.io/@marcus/ 참조

function solution(s) {
    var answer = orderByDesc(s);
    return answer;
}

let orderByDesc = s => {
    return s.split('').sort().reverse().join('');
}

s = 'Zbcdefg';
console.log(solution(s));
s = 'aABbdDcC';
console.log(solution(s));
