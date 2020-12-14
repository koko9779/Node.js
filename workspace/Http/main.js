/**
 * http 모듈 : 웹 애플리케이션을 개발할 수 있도록 제공되는 모듈
 * 			   웹 서버의 기능을 할 수 있는 모듈
 * 
 * - createServer : 웹 서버 객체 만들기
 * - listen : 웹 서버 동작하기
 * 
 * 클라이언트가 전달하는 파라미터는 url 모듈을 이용하면 코드로 받아낼 수 있음
 */

var http = require("http");
var url = require("url");

var server = http.createServer(function(req,res){
	//write: 브라우저로 응답결과 전송
	//res.write("hello world");
	//res.end();
	
	//header정보 설정하기
	//res.writeHead(200,{"content-type":"audio/mp3"});
	res.writeHead(200,{"content-type":"text/html"});
	
	res.write("<!DOCTYPE html>");
	res.write("<html>");
	res.write("<head>");
	res.write("<meta charset='utf-8'/>");
	res.write("</head>");
	res.write("<body>");
	
	var q = url.parse(req.url,true);
	//주소별로 분기하기 (동적 페이지 할당)
	//console.log(req.url);
	switch(q.pathname){
	case "/":
		res.write("<h1>root입니다</h1>");
		res.write("<a href='test1?data1=111'>test1</a><br>");
		res.write("<a href='test2?data1=222'>test2</a><br>");
		break;
	case "/test1":
		res.write("<h1>test1입니다</h1>");
		res.write("<h1>data1 :"+q.query.data1+"</h1><br>")
		break;
	case "/test2":
		res.write("<h1>test2입니다</h1>");
		res.write("<h1>data1 :"+q.query.data1+"</h1><br>")
		break;
	}
	
	res.write("</body>");
	res.write("</html>");
});

server.listen(1234);
console.log("서버 가동");
