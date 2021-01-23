// 2차원 배열 예제
var n1 = 1;
var recode1 = ["1 fracta", "1 sina", "1 hana", "1 robel", "1 abc", "1 sina", "1 lynn"];
//solution(n1, recode1);

var n2 = 4;
var recode2 = ["1 a","1 b","1 abc","3 b","3 a","1 abcd","1 abc","1 aaa","1 a","1 z","1 q", "3 k", "3 q", "3 z", "3 m", "3 b"];
//solution(n2, recode2);

function solution(n, record) {
    var answer = [];
    var arr = new Array(n+1);
    
    for(var i = 0; i < record.length; i++) {
		var strRecord = record[i].split(' ');
		var strN = strRecord[0];
		var strNic = strRecord[1];
		var tmpRecord = i + ' ' + strNic;
		var chkFlg = true;
		
		for(var j = 0; arr[strN] != undefined && j < arr[strN].length; j++) {
			if(arr[strN][j] != '') {
				var arrRecord = arr[strN][j].split(' ');
				var arrN = arrRecord[0];
				var arrNic = arrRecord[1];
				if(arrNic == strNic) {
					chkFlg = false;
					break;
				}
			}
		}
		
		if(chkFlg) {
			if(arr[strN] == undefined) {
				arr[strN] = []
			}
			arr[strN].push(tmpRecord);
			if(arr[strN].length > 5) {
				arr[strN][arr[strN].length - 6] = '';
			}
		}
    }
    
    for(var i = 1; i < n+1; i++) {
    	if(arr[i] != undefined) {
	    	var j = arr[i].length - 5 > 0 ? arr[i].length - 5 : 0;
	    	for(; j < arr[i].length; j++) {
				if(arr[i][j] != '') {
					var answerNic = arr[i][j].split(' ')[1];
					if(answerNic != '') {
						answer.push(answerNic);
					}
				}
	       	}
       	}
    }
    
    return answer;
}