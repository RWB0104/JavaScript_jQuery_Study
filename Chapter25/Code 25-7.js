// 모듈을 추출합니다.
var express = require("express");

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static("public"));

// 웹 서버를 라우트합니다.
app.get("/data.jsonp", function(request, response)
{
	// 요청 매개변수를 추출합니다.
	var callback = request.query.callback;

	// 응답합니다.
	response.send(callback + "(" + JSON.stringify(
	{
		제품명: "7D 건조 망고",
		유형: "당절임",
		성분: "망고, 설탕, 메타중아황산나트륨, 치자황색소",
		원산지: "필리핀"
	}) + ")");
});

// 웹 서버를 실행합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});