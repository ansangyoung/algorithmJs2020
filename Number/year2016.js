// https://programmers.co.kr/learn/courses/30/lessons/12901
var a = 5, b = 24;
console.log(solution(a, b));
function solution(a, b) {
    var answer = year2016(a, b);
    return answer;
}

function year2016(a, b) {
    var dayOfTheWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    var s = '';
    
    if(a < 10) {
    	a = '0' + a;
    }
    if(b < 10) {
    	b = '0' + b;
    }
    var transDate = '2016-' + a + '-' + b;
    var returnDay = dayOfTheWeek[new Date(transDate).getDay()];
    return returnDay;
}