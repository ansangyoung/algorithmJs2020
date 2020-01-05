var testInput = [6, 9, 5, 7, 4];
console.log(testInput + ' after: ' + solution(testInput));

function solution(s) {
    var answer = topStack(s);
    return answer;
}

function top(s) {
    let sLen = s.length;
    let topReceiveIdx = new Array(sLen);
    topReceiveIdx.fill(0);
    
    for(var i = sLen-1; i > 0; i -= 1) {
        for(var j = i-1; j >= 0; j -= 1) {
        	if(s[j] > s[i]) {
            	topReceiveIdx[i] = j+1;
                break;
            }
        }
    }
    return topReceiveIdx;    
}

function topStack(s) {
	console.log('s:' + s);
	let topReceiveIdx = s.map((value, idx) => {
        console.log('');
        console.log('idx:' + idx);
        while (idx) {
        	idx--;
            console.log('idx,s[' + idx + '],value: ' + idx + ' ' + s[idx] + ' ' + value);
            if (s[idx] > value) {
            	return idx+1;
            }
        }
        return 0;
    });
	return topReceiveIdx;
}
