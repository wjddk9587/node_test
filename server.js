var http = require('http');
var fs = require('fs');
var url = require('url');
var queryString = require('querystring');


//Example(2) text_html보여주기
http.createServer(function(request, response){
    fs.readFile('./html/test_res.html', function(error, data){
        if(error){
            console.log(error.message);}
        else{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        }    
    });
}).listen(1234,'127.0.0.1');
    console.log('Server running at http://127.0.0.1:1234');


/*
//Example(3) 이미지 파일 보여주기 
http.createServer(function(request, response){
    fs.readFile('./img/kaka.png', function(error, data){
        if(error){
                console.log(error.message);} else{
                    response.writeHead(200,{'Content-Type': 'image/png'});
                    response.end(data);
                }

            });

    }).listen(1234,'127.0.0.1');
        console.log('Server running at http://127.0.0.1:1234');
*/

/*
//Example(4) 이미지 파일 보여주기 -> 페이지 옮기기 
http.createServer(function(request, response){
    fs.readFile('./img/kaka.png', function(error, data){
        if(error){
                console.log(error.message);} else{
                    response.writeHead(302, {'Location':'https://cs.dongduk.ac.kr'})
                    response.end();
                }

            });

    }).listen(1234,'127.0.0.1');
        console.log('Server running at http://127.0.0.1:1234');
*/

/*

//Example(5) 페이지 옮기기

//사용자의 요청 정보는 request에 담겨 있다.
    http.createServer(function (request, response){

                        //url 모듈안에 parse기능이 포함되어 있다.    pathname  : 폴더 이름    
        var pathName = url.parse(request.url).pathname; //pathname = second
        if(pathName == '/'){ //html://127.0.0.1:1234
            fs.readFile('./html/index.html', function(error, data){

                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            });


        }
        else if(pathName == '/second'){
            fs.readFile('./html/second.html', function(error, data){

                response.writeHead(200, {'Content-Type': 'text/html'});
                response.end(data);
            });

        }

        else if (pathName == '/cs'){
            response.writeHead(302, {'Location':'https://cs.dongduk.ac.kr'});
            response.end();       

        }
    }).listen(1234, '127.0.0.1');
        console.log('Server running at http://127.0.0.1:1234');


http.createServer(function(request, response){
    var query= url.parse(request.url, true).query;
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>' + JSON.stringify(query) + '</h1>');

}).listen(1234, function(){
    console.log('Server running at http://127.0.0.1:1234');



});*/


/*
//Example(6) login후 실패, 성공 처리 
http.createServer(function(request, response){

    if(request.method == 'GET'){
        fs.readFile('./html/login.html', function(error, data){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.end(data);
        });
    }



    else if(request.method == 'POST'){
        request.on('data', function(data){ //on: ~할 때, 이벤트가 발생했을 때
            response.writeHead(200, {'Content-Type':'text/html'});

            var text = "";
            text += data;
            var parseStr = queryString.parse(text,'&','=');
            console.log(parseStr.id);
            console.log(parseStr.pwd);


            if(parseStr.pwd == "test"){
                response.writeHead(302, {'Location':'https://cs.dongduk.ac.kr'});
                response.end();           
            }

            else{
                fs.readFile('./html/login_fail.html', function(error, data){

                    response.writeHead(200, {'Content-Type': 'text/html'});
                    response.end(data);

                });
            }
        }); 
    }
    }).listen(1234, function(){
    console.log('Server running at http://127.0.0.1:1234');
});

*/