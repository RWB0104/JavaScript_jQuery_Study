// 모듈을 추출합니다.
var mysql = require("mysql");

// 데이터베이스와 연결합니다.
var client = mysql.createConnection(
{
	user: "root",
	password: "3141592",
});

// 데이터베이스 쿼리를 사용합니다.
client.query("USE Company");
client.query("SELECT * FROM products", function(error, result, fields)
{
	/* 오류가 생길경우 아래의 쿼리를 입력
	 * ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
	 *
	 * root: 계정 이름
	 * localhost: 컴퓨터 이름(외부접속이 아니라면 localhost로 해도 무방)
	 * password: 비밀번호
	 */
	if (error)
	{
		console.log("쿼리 문장에 오류가 있습니다.");
	}

	else
	{
		console.log(result);
	}
});