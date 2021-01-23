// https://programmers.co.kr/learn/courses/30/lessons/12900

function solution(n) {
    var tiling = [0, 1, 2];
    for(var i = 3; i <= n; i++) {
    	tiling[i] = (tiling[i-1] + tiling[i-2]) % 1000000007;
    }
    return tiling[n];
}
var n = 4;
console.log(solution(n));