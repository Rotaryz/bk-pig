<?php
	//前端传过来的页码
	$page = isset($_GET['page'])?$_GET['page']:'';
	//前端请求每页的个数
	$num = isset($_GET['num'])?$_GET['num']:10;
	$servername = 'localhost';
	$usename = 'root';
	$password = '';
	$database = 'masa';

	$conn = new mysqli($servername,$usename,$password,$database);
	$conn->set_charset('utf8');

	//检测连接
	if($conn->connect_errno){
		die('连接失败'.$conn ->connect_error);
	};

	//查询结果
	$sql = "select * from goodslist limit ".($page-1)*$num.",".$num;
	$res = $conn-> query($sql);
	$rows = $res->fetch_all(MYSQLI_ASSOC);

	echo json_encode($rows,JSON_UNESCAPED_UNICODE);
	//关闭数据库
	$conn->close();
?>