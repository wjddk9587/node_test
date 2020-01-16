var http = require('http'); // http라는 module을 가져와 쓰겠다. 
                            //기본적으로 내장되어 있는 module
http.createServer(function handler(req, res){ // 함수 형 프로그램 특징: 함수 값 자체를 매개변수 처럼들어 갈 수 있다.
                                         // request, response
    res.writeHead(200, {'Content-type': 'text/html'});
    res.write('<h1>Server Test</h1>');
    res.end('Hello world!\n'); //사용자의 요청을 듣고 난 후 요청결과 함수가 들어간다. 이벤트 핸들러 역할을 하는 callback함수
    
}).listen(8080, '127.0.0.1'); //http module의 함수를 통하여 server를 만든 후 요청을 들어라
//사용자의 입력이 들어오면 함수 호출은 createServer가 수행 시켜 준다.

console.log('Server running at http://127.0.0.1:8080');

var	http	=	require('http');

var	url	=	require('url'); 
var	querystring	=	require('querystring');	
var	server	=	http.createServer(function(request,response){
    console.log('---	log	start	---');
    
    var	parsedUrl	=	url.parse(request.url);				
    console.log(parsedUrl);		
    
    var	parsedQuery	=	querystring.parse(parsedUrl.query,'&','=') ;				
    console.log(parsedQuery);				
    console.log('---	log	end	---');
    
    response.writeHead(200,	{'Content-Type':'text/html'});				
    response.end('Hello	node.js!!'); 
});

server.listen(8080,	function(){	console.log('Server	is	running...'); });