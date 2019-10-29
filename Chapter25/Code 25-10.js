// 모듈을 추출합니다.
var http = require("http");
var express = require("express");

// 웹 서버를 생성합니다.
var app = express();
app.use(express.static("public"));

// 웹 서버를 라우트합니다.
app.get("/data.redirect", function(request, response)
{
	// 기상청 RSS 페이지에 데이터 요청
	http.get("http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnId=108", function(web)
	{
		// 데이터를 읽을 때마다
		web.on("data", function(buffer)
		{
			response.write(buffer);
		});

		// 데이터를 모두 읽으면
		web.on("end", function()
		{
			response.end();
		});
	});
});

// 웹 서버를 실행합니다.
app.listen(52273, function()
{
	console.log("Server Running at http://127.0.0.1:52273");
});