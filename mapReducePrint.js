// https://www.zerocho.com/category/JavaScript/post/5acafb05f24445001b8d796d 참조
const oneTwoThree = [1, 2, 3];
let result = oneTwoThree.map((v) => {
  return v; 
});
console.log("result:" + result);
console.log();

// 배열.reduce((누적값, 현잿값, 인덱스, 요소) => { return 결과 }, 초깃값);
result = oneTwoThree.reduce((acc, cur, i) => {
	  console.log('acc:' + acc + ', cur:' + cur + ', i:' + i);
	  return acc + cur;
	}, 0);

// 초기값을 적어주지 않으면, 자동으로 초기값이 0번째 인덱스의 값.
console.log("result:" + result);
console.log()
result = oneTwoThree.reduce((acc, cur, i) => {
	  console.log(acc, cur, i);
	  return acc + cur;
	});
console.log("result:" + result);
