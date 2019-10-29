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
	// 데이터베이스 요청을 수행합니다.
	client.query("SELECT * FROM products", function(error, data)
	{
		response.send(data);
	});
});

app.get("/products/:id", function(request, response)
{
	// 변수를 선언합니다.
	var id = Number(request.params.id);

	// 데이터베이스 요청을 수락합니다.
	client.query("SELECT * FROM products WHERE id = ?", [id], function(error, data)
	{
		response.send(data);
	});
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