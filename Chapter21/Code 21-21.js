// 모듈을 추출합니다.
var express = require("express");

// 변수를 선언합니다.
var items = [
{
	name: "우유",
	price: "2000"
},
{
	name: "홍차",
	price: "5000"
},
{
	name: "커피",
	price: "5000"
}];

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static("public"));

// 라우트합니다.
app.all("/data.html", function(request, response)
{
	// TODO
});

app.all("/data.json", function(request, response)
{
	// TODO
});

app.all("/data.xml", function(request, response)
{
	// TODO
});

// 웹 서버를 실행합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});