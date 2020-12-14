/**
 * path 모듈 : 경로에 대한 작업을 할 수 있는 모듈
 * 
 * - basename : (절대/상대) 경로에서 파일 이름을 가져옴
 * - dirname : 파일의 경로를 가져옴
 * - extname : 파일의 확장자를 가져옴
 * - isAbsolute : 절대경로인지 아닌지를 파악 (절대경로 true 상대경로 false)
 * - join : 주어진 문자열을 합쳐서 하나의 경로를 만듦
 * - normalize : 경로를 정리
 */

var path = require("path");

//basename
//window에서 사용하는 경로 : \\
var basename1 = path.basename("C:\\abc\\abc.txt");
console.log("basename1 : ", basename1);
//리눅스, 맥에서 사용하는 경로 : /
var basename2 = path.basename("c:/abc/abc.txt");
console.log("basename2 : ", basename2);
//상대 경로
var basename3 = path.basename("abc.txt");
console.log("basename3 : ", basename3);

//dirname
//절대 경로
var dirname1 = path.dirname("c:/abc/abc.txt");
console.log("dirname1 : ", dirname1);
//상대 경로 (현재 경로일 경우 : . 만 표시)
var dirname2 = path.dirname("abc.txt");
console.log("dirname2 : ", dirname2);

//extname
//절대 경로
var extname1 = path.extname("c:/abc/abc.txt");
console.log("extname1 : ", extname1);
//상대 경로
var extname2 = path.extname("abc.txt");
console.log("extname2 : ", extname2);

//isAbsolute
var isAbsolute1 = path.isAbsolute("c:/abc/abc.txt");	//os에 관계없는 경로
var isAbsolute2 = path.isAbsolute("abc.txt");
var isAbsolute3 = path.isAbsolute("c:\\abc\\abc.txt");
console.log("isAbsolute1 : ", isAbsolute1);
console.log("isAbsolute2 : ", isAbsolute2);
console.log("isAbsolute3 : ", isAbsolute3);

//join
var join = path.join("aaa","bbb","ccc.txt");
console.log("join : ",join);

//normalize
var normalize = path.normalize("c:\\aaa\\..\\bbb\\ccc.txt");
console.log(normalize);
