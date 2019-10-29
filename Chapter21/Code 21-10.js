// 모듈을 추출합니다.
var express = require("express");

// 웹 서버를 생성합니다.
var app = express();

app.use(function(request, response, next)
{
	console.log("fisrt");
	next();
});

app.use(function(request, response, next)
{
	console.log("second");
	next();
});

app.use(function(request, response, next)
{
	response.send("<h1>Hello Middleware .. !</h1>");
});

// 웹 서버를 실행합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});