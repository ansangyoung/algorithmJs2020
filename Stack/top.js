var testInput = [6, 9, 5, 7, 4];
console.log(solution(testInput));

function solution(s) {
    //var answer = topStack(s);
    var answer = top(s);
    return answer;
}

function top(s) {
    let sLen = s.length;
    let topReceiveIdx = new Array(sLen);
    topReceiveIdx.fill(0);
    
    for(var i = sLen - 1; i > 0; i -= 1) {
        for(var j = i - 1; j >= 0; j -= 1) {
        	if(s[i] < s[j]) {
            	topReceiveIdx[i] = j + 1;
                break;
            }
        }
    }
    return topReceiveIdx;   
}

function topStack(s) {
	let topReceiveIdx = s.map((value, idx) => {
        while (idx) {
        	idx--;
            if (value < s[idx]) {
            	return idx + 1;
            }
        }
        return 0;
    });
	return topReceiveIdx;
}
