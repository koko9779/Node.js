/*
 * crypto 모듈: 암호화하기 위한 모듈
 * 
 * - getCiphers     : 지원하는 암호화 알고리즘 이름들을 반환한다.
 * - createCipher   : 암호화용 객체를 생성한다.
 * - createDecipher : 복호화용 객체를 생성한다.
 * - update         : 데이터를 암호화하거나 복호화한다.
 * - final          : 암호화된 데이터에 마지막 종료 블럭을 추가한다.
 */

var crypto = require("crypto");

var ciphers = crypto.getCiphers();

for(var x of ciphers){
	console.log(x);
}

var key = "test key";
var data = "암호화할 데이터";

//암호화 : aes-256-cbc 방식으로 만들어보기
var cipher = crypto.createCipher("aes-256-cbc", key);
//utf8형식의 데이터를 암호화 알고리즘에 의해서 base64비트 형태로 암호화 하겠다.
var result = cipher.update(data, "utf8", "base64");
result += cipher.final("base64");

console.log("암호화 문자열:",result);

var decipher = crypto.createCipher("aes-256-cbc", key);
var result2 = decipher.update(result,"base64","utf8");
result2 += decipher.final("utf8");

console.log("복호화 문자열:",result);
