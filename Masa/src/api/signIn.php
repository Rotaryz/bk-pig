<?php 
	include 'common.php';
	$name = isset($_GET['uesname'])?$_GET['uesname']:'';
	$psw = isset($_GET['psw'])?$_GET['psw']:'';
	 $psw = md5($psw);
	//查询数据库
	$sql = "SELECT name FROM user WHERE name='$name'&&psw='$psw'";
	// 获取查询结果
	$res = $conn->query($sql);

	// 使用查询结果集
	$rows = $res->fetch_all(MYSQLI_ASSOC);
	if($rows){
		echo 'yes';
	}else{
		echo 'no';
	};

	//关闭连接
	$conn->close();
?>