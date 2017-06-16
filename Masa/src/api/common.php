<?php

	$servername = 'localhost';
	$usename = 'root';
	$password = '';
	$database = 'masa';
	$conn = new mysqli($servername,$usename,$password,$database);
	//设置字符集
	$conn->set_charset('utf8');
	//检测连接
	if($conn->connect_errno){
		die('连接失败'.$conn ->connect_error);
	};
	

?>