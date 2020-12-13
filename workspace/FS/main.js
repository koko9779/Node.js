/*
 * FS 모듈 : 파일에 데이터를 쓰고 읽어 올 수 있는 기능을 제공하는 모듈
 * 
 *  - writeFile     : 비동기식, 파일에 데이터를 쓴다
 *  - writeFileSync : 동기식,   파일에 데이터를 쓴다
 */

var fs = require("fs");

//파일이 없으면 새롭게 만듦, 파일이 있으면 내용 덮어쓰기
//파일명, 내용
fs.writeFile("data1.txt","Hello node.js", function(error){
	console.log("비 동기식 저장 1");
});

fs.writeFile("data2.txt","Hello node.js", function(error){
	console.log("비 동기식 저장 2");
});