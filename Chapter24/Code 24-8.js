// 모듈을 추출합니다.
var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");

// 데이터베이스와 연결합니다.
var client = mysql.createConnection(
{
	user: "root",
	password: "3141592",
	database: "Company"
});

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded(
{
	extended: false
}));

app.get("/products", function(request, response)
{
	// TODO
});

app.get("/products/:id", function(request, response)
{
	// TODO
});

app.post("/products", function(request, response)
{
	// TODO
});

app.put("/products/:id", function(request, response)
{
	// TODO
});

app.del("/products/:id", function(request, response)
{
	// TODO
});

app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});