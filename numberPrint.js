function numberPrint(s) {
	console.log("Number(" + s + "):" + Number(s));
}

numberPrint('1');
numberPrint(1);
numberPrint('a');
numberPrint('');
numberPrint(' ');
numberPrint("");
numberPrint(" ");
numberPrint();
numberPrint(NaN);
numberPrint(undefined);
numberPrint({});
numberPrint(true);
numberPrint(null);
numberPrint(new Date());
numberPrint(new Date().toString());
numberPrint(new String());
numberPrint(new Array());
