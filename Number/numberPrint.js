function numberPrint(s) {
	console.log("Number(" + s + "):" + Number(s));
}

numberPrint('1');					// 1
numberPrint(1);						// 1
numberPrint('a');					// NaN
numberPrint('');					// 0
numberPrint(' ');					// 0
numberPrint("");					// 0
numberPrint(" ");					// 0
numberPrint();						// NaN
numberPrint(NaN);					// NaN
numberPrint(undefined);				// NaN
numberPrint({});					// NaN
numberPrint(true);					// 1
numberPrint(null);					// 0
numberPrint(new Date());			// 1611387715209
numberPrint(new Date().toString()); // NaN
numberPrint(new String());			// 0
numberPrint(new Array());			// 0