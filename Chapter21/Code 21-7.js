// 모듈을 추출합니다.
var express = require("express");

// 웹 서버를 생성합니다.
var app = express();

// 웹 서버를 실행합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});