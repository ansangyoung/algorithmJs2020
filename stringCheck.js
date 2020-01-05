var testInput = '1234';
console.log(testInput + ' s.match(/\D/gi): ' + testInput.match(/\D/gi));
testInput = 'aa12';
console.log(testInput + ' s.match(/\D/gi): ' + testInput.match(/\D/gi));
testInput = '0000';
console.log(testInput + ' s.match(/\D/gi): ' + testInput.match(/\D/gi));
testInput = '000a';
console.log(testInput + ' s.match(/\D/gi): ' + testInput.match(/\D/gi));

function solution(s) {
    var answer = stringCheck(s);
    return answer;
}

function stringCheck(s) {
    let sLen = s.length;
    var stringCheckFlg = false;
    if((sLen == 4 || sLen == 6) && s.match(/\D/gi) == null) {
        stringCheckFlg = true;
    } 
    return stringCheckFlg;    
}