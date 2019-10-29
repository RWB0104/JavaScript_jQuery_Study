// 모듈을 추출합니다.
var express = require("express");

// 웹 서버를 생성합니다.
var app = express();
app.use(express.logger());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session());
app.use(express.static("public"));