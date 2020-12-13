/*
 * dns 모듈: 지정된 도메인의 dbs 정보를 알아올 수 있는 모듈
 *           지정된 도메인의 ip 주소 등의 정보를 파악할 수 있다.
 *
 *-  lookup : 지정된 도메인을 가져오는 함수
 */

var dns = require("dns");

//알고자하는 도메인주소에 접속해서 정보를 가져오면-> 함수 호출
//err : 에러가 발생하면 찍힘
//family : ip 버전 확인 (보통은 버전4)
dns.lookup("google.com", function(err, address, family){
	console.log("IP 주소:", address);
	console.log("IP 버전:", family);
});

//IP 버전4일 때
var op1 = {
		family : 4
}

dns.lookup("google.com",op1,function(err,address,family){
	console.log("IP 주소 v4:",address);
});

//IP 버전6일 때
var op2 = {
		family : 6
}

dns.lookup("google.com",op1,function(err,address,family){
	console.log("IP 주소 v6:",address);
});


