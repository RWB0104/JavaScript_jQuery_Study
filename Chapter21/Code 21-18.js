// 모듈을 추출합니다.
var express = require("express");

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static("public"));

// 라우트합니다.
app.all("/a", function(request, response)
{
	// TODO
});

app.all("/b", function(request, response)
{
	// TODO
});

app.all("/c", function(request, response)
{
	// TODO
});

// 웹 서버를 생성합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});