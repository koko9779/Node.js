/**
 * Global 모듈 : 모듈을 생성하지 않고 사용할 수 있는 것들을 가지고 있는 모듈 객체
 * 
 *				 프로그램 생성시 동시 생성되고, 어디서든지 사용 가능
 *
 * - Buffer : 메모리를 동적할당 할 수 있는 모듈
 * - __dirname : 현재 실행 중인 파일의 경로
 * - __filename : 현재 실행 중인 파일의 경로 + 파일 이름
 * 
 * 이벤트 단위 하나가 끝날 때마다 작업처리를 하는 것
 * - setlmmediate : 하나의 사건처리가 끝나면 동작할 코드를 등록
 * - clearlmmediate : 등록된 lmmediate 를 제거
 * 
 * - setInterval : 주어진 함수를 주어진 시간마다 계속 호출
 * - clearInterval : 등록된 Interval 을 제거
 * 
 * - setTimeout : 주어진 함수를 주어진 시간 후에 한번 호출
 * - clearTimeout : 등록된 Timeout 을 제거
 * 
 * - console : 화면 출력을 위한 객체
 * - exports : 모듈을 만들 때 사용하는 객체
 * - require : 모듈 객체를 만드는 함수
 */


console.log("__dirname: ", __dirname);
console.log("__filename: ", __filename);
/*
setImmediate(function(){
	console.log("Immediate 동작1");
});

console.log("node.js 코드입니다.");

var a1 = setImmediate(function(){
	console.log("Immediate 동작2");
});

console.log("node.js 코드입니다.");
console.log("node.js 코드입니다.");

clearImmediate(a1);	//취소 코드
 */

/*
var a1 = 0;
var a2 = setInterval(function(){
	console.log("interval 동작");
	a1++;
	console.log("a1:",a1);
	if(a1>=5){
		clearInterval(a2);
	}
}, 1000);
*/

var a1 = setTimeout(function(){
	console.log("timeout 동작");
},1000);

clearTimeout(a1);


console.log("작업이 모두 완료되었습니다.");