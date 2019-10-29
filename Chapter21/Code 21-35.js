// 모듈을 추출합니다.
var express = require("express");
var bodyParser = require("body-parser");

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
app.use(bodyParser.urlencoded(
{
	extended: false
}));

app.get("/products", function(request, response)
{
	response.send(items);
});

app.get("products/:id", function(request, response)
{
	// 변수를 선언합니다.
	var id = Number(request.params.id);

	// 응답합니다.
	response.send(items[id]);
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

// 웹 서버를 실행합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
})